interface IErrorCustom extends Error {
  code: number;
}

export interface IRequest<U> {
  isSuccess: boolean;
  value: U | undefined;
  error: IErrorCustom | undefined;
}

interface IHandleRequest extends RequestInit {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body: BodyInit | null | undefined;
}

const handleRequest = async ({ url, ...props }: IHandleRequest) =>
  await fetch(url, {
    ...props,
  });

export default (urlBase: string) => {
  const Get = async <U>(path: string): Promise<IRequest<U>> => {
    return await handleRequest({
      body: null,
      method: "get",
      url: `${urlBase}${path}`,
    })
      .then(async (res) => ({
        isSuccess: true,
        value: await res.json(),
        error: undefined,
      }))
      .catch((err) => ({
        error: err,
        isSuccess: false,
        value: undefined,
      }));
  };

  const Post = async <U>(
    path: string,
    data: any,
    requestOptions?: RequestInit
  ): Promise<IRequest<U>> => {
    return await handleRequest({
      ...requestOptions,
      body: data,
      method: "post",
      url: `${urlBase}${path}`,
    })
      .then(async (res) => ({
        isSuccess: true,
        value: await res.json(),
        error: undefined,
      }))
      .catch((err) => ({
        error: err,
        isSuccess: false,
        value: undefined,
      }));
  };

  return { Get, Post };
};

interface IErrorCustom extends Error {
  code: number;
}

interface IRequest<U> {
  isSuccess: boolean;
  value: U | undefined | any;
  error: IErrorCustom | undefined;
}

interface IHandleRequest {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body: BodyInit | null | undefined;
}

const handleRequest = async ({ body, method, url }: IHandleRequest) =>
  await fetch(url, {
    method,
    body,
  });

export const Get = async <U>(url: string): Promise<IRequest<U>> => {
  return await handleRequest({
    body: null,
    method: "get",
    url,
  })
    .then(async (res) => ({
      isSuccess: true,
      value: res.body,
      error: undefined,
    }))
    .catch((err) => ({
      error: err,
      isSuccess: false,
      value: undefined,
    }));
};

export const Post = async <U>(url: string, data: any): Promise<IRequest<U>> => {
  return await handleRequest({
    body: data,
    method: "post",
    url,
  })
    .then(async (res) => ({
      isSuccess: true,
      value: res.body,
      error: undefined,
    }))
    .catch((err) => ({
      error: err,
      isSuccess: false,
      value: undefined,
    }));
};

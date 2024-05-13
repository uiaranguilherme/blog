import { useState } from "react";

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

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleRequest = async ({ body, method, url }: IHandleRequest) =>
    await fetch(url, {
      method,
      body,
    });

  const Get = async <U>(url: string): Promise<IRequest<U>> => {
    setIsLoading(true);
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
      }))
      .finally(() => setIsLoading(false));
  };

  const Post = async <U>(url: string, data: any): Promise<IRequest<U>> => {
    setIsLoading(true);
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
      }))
      .finally(() => setIsLoading(false));
  };

  return { isLoading, Get, Post };
};

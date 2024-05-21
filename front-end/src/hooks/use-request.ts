import { useCallback, useEffect, useState } from "react";

interface IUseRequestProps<T> {
  defaultValues: T;
  request: () => Promise<any>;
}

export default <T>({ defaultValues, request }: IUseRequestProps<T>) => {
  const [data, setData] = useState<T>(defaultValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    const data = await request();
    setData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [request]);

  return {
    data,
    isLoading,
    request: fetch,
  };
};

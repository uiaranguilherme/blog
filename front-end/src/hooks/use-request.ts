import { useCallback, useEffect, useState } from "react";
import { useLoadingContext } from ".";

interface IUseRequestProps<T> {
  defaultValues: T;
  request: () => Promise<any>;
}

export default <T>({ defaultValues, request }: IUseRequestProps<T>) => {
  const { handleChangeLoading, isLoading } = useLoadingContext();
  const [data, setData] = useState<T>(defaultValues);

  const fetch = useCallback(async () => {
    handleChangeLoading(true);
    const data = await request();
    setData(data);
    handleChangeLoading(false);
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

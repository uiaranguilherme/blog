/** @format */

import { useState } from "react";
import { IContextApp } from ".";

export interface IContextProps {
  isLoading: boolean;
}

export default (): IContextApp => {
  const [context, setContext] = useState<IContextProps>({
    isLoading: false,
  });

  const handleChangeLoading = (isLoading: boolean) => {
    console.log("alterou o loading");
    setContext((state) => ({
      ...state,
      isLoading: isLoading,
    }));
  };

  return { ...context, handleChangeLoading };
};

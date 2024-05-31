/** @format */

import { createContext, ReactNode } from "react";
import initialValues from "./initial-values";

export interface IContextApp {
  isLoading: boolean;
  handleChangeLoading: (isLoading: boolean) => void;
}

var contextValues: IContextApp = {
  isLoading: false,
  handleChangeLoading: () => {},
};
export const ContextLoading = createContext(contextValues);

export default ({ children }: { children: ReactNode }) => {
  const values = initialValues();
  return (
    <ContextLoading.Provider value={values}>{children}</ContextLoading.Provider>
  );
};

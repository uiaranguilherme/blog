/** @format */

import { createContext, ReactNode } from "react";
import initialValues from "./initial-values";
import { PaletteMode } from "@mui/material";

export interface IContextApp {
  paletteMode: PaletteMode;
  handleChangeTheme: (theme: PaletteMode) => void;
}

var contextValues: IContextApp = {
  paletteMode: "light",
  handleChangeTheme: () => {},
};
export const ContextApp = createContext(contextValues);

export default ({ children }: { children: ReactNode }) => {
  const values = initialValues();
  return <ContextApp.Provider value={values}>{children}</ContextApp.Provider>;
};

/** @format */

import { useState } from "react";
import { PaletteMode } from "@mui/material";
import { IContextApp } from ".";

export interface IContextProps {
  paletteMode: PaletteMode;
}

export default (): IContextApp => {
  const [context, setContext] = useState<IContextProps>({
    paletteMode: "light",
  });

  const handleChangeTheme = (theme: PaletteMode) =>
    setContext((state) => ({
      ...state,
      paletteMode: theme,
    }));

  return { ...context, handleChangeTheme };
};

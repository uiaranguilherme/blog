/** @format */

import { PaletteMode, createTheme, alpha, lighten } from "@mui/material";
import { useContext, useEffect } from "react";
import { ContextApp } from "../context";

declare module "@mui/material/styles" {
  interface PaletteColor {
    background: string;
    contrastBackgroud?: string;
    text?: string;
  }
  interface SimplePaletteColorOptions {
    background: string;
    contrastBackgroud?: string;
    text?: string;
  }
  interface TypeBackground {
    header: string;
    footer: string;
    icons: string;
  }
  interface TypeText {
    white: string;
  }
}

export default () => {
  const { paletteMode, handleChangeTheme } = useContext(ContextApp);
  const theme = createTheme({
    palette: {
      mode: paletteMode,
      ...(paletteMode === "light"
        ? {
            primary: {
              main: "#d5371e",
              background: "#fcfcfc",
              contrastBackgroud: "#000000",
              contrastText: "#dbdbdb",
              text: "#1F201F",
            },
            secondary: {
              main: "#dbdbdb",
              background: "#f3f3f3b5",
              contrastBackgroud: "#000000",
              contrastText: "#1F201F",
              text: "#000000",
            },
            text: {
              primary: "#000000",
              white: "#fcfcfc",
            },
            background: {
              default: "#fcfcfc",
              paper: "#fcfcfc",
              icons: lighten("#1F201F", 0.3),
            },
          }
        : {
            primary: {
              main: "#d5371e",
              background: "#1F201F",
              contrastBackgroud: "#000000",
              contrastText: "#dbdbdb",
              text: "#fcfcfc",
            },
            secondary: {
              main: "#000000",
              background: "#f3f3f3b5",
              contrastBackgroud: "#000000",
              contrastText: "#1F201F",
              text: "#000000",
            },
            text: {
              primary: "#f3f3f3b5",
              white: "#fcfcfc",
            },
            background: {
              default: "#fcfcfc",
              paper: "#fcfcfc",
              icons: "#f3f3f3b5",
            },
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            textTransform: "none",
            borderRadius: "0.1rem",
            ...(ownerState.variant === "contained" &&
              ownerState.color === "primary" && {
                color: theme.palette.text.white,
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.95),
                },
              }),
          }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            borderRadius: "8px",
            ...(ownerState.severity === "info" && {
              backgroundColor: alpha(theme.palette.primary.main, 0.16),
              color: theme.palette.text.primary,

              svg: {
                color: theme.palette.primary.main,
              },
            }),
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            color: theme.palette.background.icons,
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            border: `1px solid ${theme.palette.primary.contrastText}`,
            //boxShadow: "none"
          }),
        },
      }
    },
  });

  useEffect(() => {
    if (window.localStorage.getItem("theme") === undefined) {
      window.localStorage.setItem("theme", paletteMode);
    } else {
      var storageTheme = window.localStorage.getItem("theme");
      handleChangeTheme(storageTheme === "light" ? "dark" : "light");
    }
  }, []);

  const changeTheme = () => {
    console.log("clicou");

    handleChangeTheme(paletteMode === "light" ? "dark" : "light");
  };

  return { paletteMode, theme, changeTheme };
};

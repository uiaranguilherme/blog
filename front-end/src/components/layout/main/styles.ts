/** @format */

import { AppBar, Box, Button, Container, styled } from "@mui/material";

export const WhapperLayout = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
}));

export const WhapperContainerLayout = styled(Box)({
  display: "flex",
  height: "calc(100% - 70px)",
});

export const ContainerLayout = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  height: "100%",
  justifyContent: "space-between",
  width: "calc(100% - 10rem)",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

/* HEADER */
export const WhapperHeaderLayoutMain = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  padding: "0 10px",
  border: "none",
  minHeight: "70px",
}));

export const ContainerHeaderLayoutMain = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "70px",
});

export const Logo = styled("img")({
  padding: "5px 0",
});

export const NavHeaderLayoutMain = styled(Box)({});

export const NavItemHeaderLayoutMain = styled(Button)({
  textTransform: "none",
  marginRight: "0.5rem",
});

/** BAR **/
export const LeftBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  padding: "5px",
  left: "0",
  height: "90%",
  minWidth: "6rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  span: {
    letterSpacing: "2px",
    writingMode: "vertical-rl",
  },

  div: {
    marginBottom: "10px",
    width: "3px",
    height: "5rem",
    backgroundColor: "red",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const RightBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  padding: "5px",
  minWidth: "6rem",
  right: "0",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "calc(100% - 70px)",

  div: {
    marginTop: "10px",
    width: "3px",
    height: "5rem",
    backgroundColor: "red",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

/** FOOTER **/
export const WhapperFooter = styled(Box)({
  width: "100%",
  minHeight: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

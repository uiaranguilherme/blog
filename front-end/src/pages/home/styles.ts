/** @format */

import { Box, styled } from "@mui/material";

export const WhapperHomePage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  height: "calc(100vh - 70px)",
  width: "100%",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "1rem 3rem",
  },
}));

export const WhapperLogoHome = styled(Box)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  width: "40%",
});

export const LogoHome = styled("img")({
  width: "100%",
});

export const WhapperApresentation = styled(Box)({});

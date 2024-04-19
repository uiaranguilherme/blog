/** @format */

import { Box, styled, Typography } from "@mui/material";

export const WhapperPageAboutMe = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 2rem",
});

export const ContainerPageAboutMe = styled(Box)({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

export const ImgAboutMe = styled("img")(({ theme }) => ({
  width: "40%",
  padding: "1rem",
  borderRadius: "4px",
  objectFit: "cover",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const DescriptionAboutMe = styled(Box)(({ theme }) => ({
  width: "60%",
  padding: "1rem 0 1rem 2rem",
  fontSize: "1.1rem",

  span: {
    color: theme.palette.primary.main,
    fontWeight: "600",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SkilsAboutMe = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "2.5rem 2rem",
});

export const Title = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  paddingBottom: "1rem",
  div: {
    width: "1rem",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    fontWeight: "600",
  },

  h5: {
    paddingLeft: "1rem",
  },
}));

export const ItemSkilAboutMe = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  margin: "5px 7px",
  height: "2.5rem",
  borderRadius: "2px",
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const HistoryAboutMe = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "2.5rem 2rem",
  width: "100%",
});

export const ItemHistory = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginBottom: "2rem",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const ItemHistoryDateAboutMe = styled(Typography)(({ theme }) => ({
  minWidth: "30%",
  paddingTop: "0.2rem",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ItemDescriptionAboutMe = styled(Box)({});

export const ItemNameCompany = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.text,
  padding: "0px",
  margin: "0px",
}));

export const ItemOfficeCompany = styled(Typography)({});

export const ItemOfficeCompanyDescription = styled(Typography)({});

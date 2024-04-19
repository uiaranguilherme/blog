/** @format */

import { Box, styled, Typography } from "@mui/material";

export const WhapperContactUsPage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: "2rem 1rem 0 1rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const FormContactUs = styled(Box)({
  flex: 1,
  padding: "2rem 1rem",
});

export const OthersContacts = styled(Box)({
  flex: 1,
  padding: "2rem 1rem",
});

export const FooterPageContactUs = styled(Box)({
  width: "100%",
  padding: "2rem 1rem",
});

export const ContactUsTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  alignItems: "center",
  height: "2rem",
  marginBottom: "1rem",

  div: {
    width: "1rem",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    fontWeight: "600",
  },

  h5: {
    fontSize: "1.2rem",
    paddingLeft: "1rem",
    margin: "0px",
  },
}));

export const WhapperOtherContact = styled(Box)({
  minHeight: "3rem",
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",

  svg: {
    marginRight: "1rem",
  },
});

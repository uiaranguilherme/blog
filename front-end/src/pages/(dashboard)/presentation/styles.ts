import { Box, Container, styled, Typography } from "@mui/material";

export const WhapperPresentationPage = styled(Box)({
  padding: "2rem 1rem",
  width: "100%",
  height: "100%",
  overflow: "auto",
});

export const ContainerPresentation = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
});

export const ContentImagePresentation = styled(Box)({
  padding: "15px 10px",
  width: "40%",
  maxWidth: "30rem",
});

export const ContainerRickText = styled(Box)({
  padding: "15px 10px",
  width: "60%",
  maxWidth: "30rem",
  height: "100%",
});

export const ActionsRickText = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

export const WhapperImagePresentation = styled(Box)({
  position: "relative",
  width: "100%",
  transition: "all 2s ease-in-out",
  span: {
    opacity: 0,
  },

  "&:hover": {
    span: {
      opacity: 1,
    },
  },
});

export const ImagePresentation = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "2px",
  objectFit: "cover",
});

export const ContainerOptionsEditImage = styled("span")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 10px",
  bottom: "0",
  height: "3rem",
  width: "100%",
  backgroundColor: theme.palette.grey["A100"],
}));

export const WhapperPresentationText = styled(Box)({
  width: "60%",
  padding: "15px 10px",
});

export const ContainerHistoryCompany = styled(Container)({
  width: "100%",
  marginTop: "1rem",
});

export const HeaderHistoryCompany = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  padding: "0 2rem",
});

export const ContentHistoryCompany = styled(Box)({});

export const FooterHistoryCompany = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

/** item historico **/
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

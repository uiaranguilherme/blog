/** @format */

import {
  alpha,
  lighten,
  darken,
  Box,
  Button,
  styled,
  Typography,
  IconButton,
} from "@mui/material";

export const WhapperPageProjects = styled(Box)({});

export const SharedParameters = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "10px",
  borderRadius: "2px",
  marginBottom: "2rem",

  ...(theme.palette.mode === "light"
    ? {
        backgroundColor: darken(theme.palette.primary.background, 0.1),
      }
    : {
        backgroundColor: lighten(theme.palette.primary.background, 0.1),
      }),
}));

export const ButtonFilterProject = styled(Button)({
  marginRight: "0.8rem",
});

export const ContainerProjects = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "space-around",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const WhappeProject = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  maxHeight: "20rem",
  padding: "5px 10px",
  ...(theme.palette.mode === "light"
    ? {
        "&:hover": {
          backgroundColor: lighten(theme.palette.secondary.main, 0.8),
        },
      }
    : {
        "&:hover": {
          backgroundColor: lighten(theme.palette.secondary.main, 0.1),
        },
      }),
}));

export const ContentProject = styled(Box)({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const ProjectTitle = styled(Typography)({
  margin: "0.4rem 0 1rem 0",
  fontWeight: "600",
});

export const ProjectDescription = styled(Typography)({
  minHeight: "5rem",
});

export const ProjectStacks = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  minHeight: "4rem",
  alignItems: "flex-start",
});

export const ProjectStack = styled(Box)(({ theme }) => ({
  padding: "2px 10px",
  margin: "2px",
  borderRadius: "2px",
  color: theme.palette.grey[100],
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
}));

export const ProjectButtonsActions = styled(Box)({});

export const IconButtonActionProject = styled(IconButton)(({ theme }) => ({
  "&:hover > svg": {
    color: theme.palette.primary.main,
  },
}));

export const FooterContainerProjects = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  marginTop: "1rem",
}));

/** @format */

import { alpha, Box, lighten, styled, Typography } from "@mui/material";

/** @format */
export const WhapperPageNewsletters = styled(Box)({
  width: "100%",
  minHeight: "calc(100vh - 70px)",
});

export const NewsPostsNewsletters = styled(Box)({
  width: "100%",
});

export const WhapperNewPost = styled(Box)<{ img: string }>(({ img }) => ({
  display: "flex",
  alignItems: "flex-end",
  backgroundImage: `url(${img})`,
  objectFit: "contain",
  objectPosition: "center",
  height: "30rem",
  width: "100%",
  borderRadius: "2px",
}));

export const InfoNewPost = styled(Box)(({ theme }) => ({
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "2px",
  backgroundColor: theme.palette.primary.background,
}));

export const TitleNewPost = styled(Typography)({
  marginBottom: "1rem",
});

export const StacksNewPost = styled(Box)({
  display: "flex",
  width: "100%",
});

export const OthersPostsNewsletters = styled(Box)(({ theme }) => ({
  padding: "1rem",
}));

export const SearchPostsNewsletters = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "2rem",
}));

export const ContainerPostsNewsletters = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "space-around",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const WhapperPostNewsletter = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
  minWidth: "20rem",
  minHeight: "20rem",
  padding: "10px 10px",
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

export const ImgPostNewsletter = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "2px",
}));

export const TitlePostNewsletter = styled(Typography)(({ theme }) => ({
  margin: "0.4rem 0 0 0",
  fontSize: "1.1rem",
}));

export const DateCreateAtPostNewsletter = styled(Typography)(({ theme }) => ({
  margin: "0 0 0.4rem 0",
}));

export const StacksPostNewsletter = styled(Box)(({ theme }) => ({
  display: "flex",
}));

export const FooterNewslettersPagination = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
}));

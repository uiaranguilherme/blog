/** @format */

import { Box, darken, lighten, styled } from "@mui/material";

export const WhapperCarousel = styled(Box)({
  width: "100%",
});

export const ContainerCarousel = styled(Box)({
  display: "flex",
  width: "100%",
});

export const DotsCarousel = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "0.4rem",
});

export const WhapperItemCarousel = styled(Box)<{ isvisible: boolean }>(
  ({ isvisible }) => ({
    display: isvisible ? "flex" : "none",
    width: "100%",
  })
);

/** **/
export const WhapperCarouselItem = styled(Box)({
  display: "flex",
  width: "100%",
});

/** DOT **/
export const WhapperDot = styled(Box)<{ isactive: boolean }>(
  ({ theme, isactive }) => ({
    ...(isactive
      ? {
          width: "3rem",
          backgroundColor: lighten(theme.palette.primary.main, 0.2),
        }
      : {
          width: "2rem",
          backgroundColor: theme.palette.primary.main,
        }),
    cursor: "pointer",
    height: "0.5rem",
    //borderRadius: "2px",
    margin: "0 0.1rem",
    transition: "all 200ms ease-in-out",
  })
);

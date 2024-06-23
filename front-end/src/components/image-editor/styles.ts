import { Box, styled } from "@mui/material";

export const ContentImagePresentation = styled(Box)<{
  width: string;
  height: string;
  objectFit: "fill" | "contain" | "cover" | "none" | "scale-down";
}>(({ height, width, objectFit }) => ({
  width: width,
  height: height,
  div: {
    width: width,
    height: height,
  },

  img: {
    objectFit: objectFit,
  },
}));

export const WhapperImagePresentation = styled(Box)({
  position: "relative",
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

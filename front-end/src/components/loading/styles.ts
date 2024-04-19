/** @format */

import { Backdrop, Box, keyframes, styled } from "@mui/material";

export const WhapperLoading = styled(Backdrop)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  overflow: "hidden",
  padding: "2rem",
  backgroundColor: theme.palette.primary.background,
}));

const animation = keyframes`
  from { transform: scale(1.1) }

  to { transform: scale(1) }
`;

export const WhapperImage = styled(Box)<{
  size: string;
}>(({ size }) => ({
  height: size,
  width: size,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "120px",
  animation: `${animation} 1s linear infinite alternate`,
}));

export const Image = styled("img")({
  height: "100%",
  padding: "0 0 0 1rem",
});

import { Box, styled } from "@mui/material";

export const WhapperBlockquote = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  color: theme.palette.text.disabled,
}));

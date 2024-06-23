import { alpha, Box, styled } from "@mui/material";

export const StackItem = styled(Box)(({ theme }) => ({
  padding: "2px 10px",
  margin: "2px",
  borderRadius: "2px",
  color: theme.palette.grey[100],
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
}));

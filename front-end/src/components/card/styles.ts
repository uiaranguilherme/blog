/** @format */

import { Box, styled } from "@mui/material";

export const WhapperCard = styled(Box)(({ theme }) => ({
  margin: "10px",
  borderRadius: "2px",
  ...(theme.palette.mode === "light"
    ? {
        border: `1px solid ${theme.palette.grey["400"]}`,
      }
    : {
        border: `1px solid ${theme.palette.grey["800"]}`,
      }),
}));

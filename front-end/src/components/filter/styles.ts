/** @format */

import styled from "@emotion/styled";
import { Box } from "@mui/material";

/** FILTER **/
export const WhapperFilterLayout = styled(Box)<{
  src: string;
  opacity: number;
}>(({ src, opacity }) => ({
  backgroundImage: `url(${src})`,
  height: "100%",
  width: "100%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: "9999",
  top: "0",
  left: "0",
  backgroundSize: "500px",
  opacity: `calc(${opacity} / 125)`,
  filter: "brightness(350%)",
  backgroundRepeat: "repeat",
}));

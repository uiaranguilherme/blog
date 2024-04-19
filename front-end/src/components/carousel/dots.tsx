/** @format */

import { BoxProps } from "@mui/material";
import { WhapperDot } from "./styles";

interface IDotProps extends BoxProps {
  isSelected: boolean;
}

export default ({ isSelected, ...rest }: IDotProps) => {
  return <WhapperDot {...rest} isactive={isSelected}></WhapperDot>;
};

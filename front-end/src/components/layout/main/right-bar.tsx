/** @format */

import { ContactPageOutlined, Instagram, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { RightBar } from "./styles";

export default () => {
  return (
    <RightBar>
      <span></span>
      <IconButton>
        <ContactPageOutlined />
      </IconButton>
      <IconButton>
        <Instagram />
      </IconButton>
      <IconButton>
        <LinkedIn />
      </IconButton>
      <div></div>
    </RightBar>
  );
};

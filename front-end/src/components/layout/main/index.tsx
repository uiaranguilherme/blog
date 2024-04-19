/** @format */

import { lazy } from "react";
import {
  WhapperLayout,
  WhapperContainerLayout,
  ContainerLayout,
} from "./styles";
import { Outlet } from "react-router-dom";
import { Toolbar } from "@mui/material";

const Header = lazy(() => import("./header"));
const RightBar = lazy(() => import("./right-bar"));
const LeftBar = lazy(() => import("./left-bar"));
const Footer = lazy(() => import("./footer"));

export default () => {
  return (
    <WhapperLayout>
      <Header />
      <Toolbar sx={{ height: "70px" }} />
      <WhapperContainerLayout>
        <LeftBar />
        <ContainerLayout>
          <Outlet />
        </ContainerLayout>
        <RightBar />
      </WhapperContainerLayout>
    </WhapperLayout>
  );
};

export { Footer };

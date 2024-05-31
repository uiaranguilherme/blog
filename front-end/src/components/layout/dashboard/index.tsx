import { lazy } from "react";
import { Outlet } from "react-router-dom";
import {
  WhapperLayoutDashboard,
  ContainerLayoutDashboard,
  ContentLayoutDashboard,
} from "./styles";
import { Toolbar } from "@mui/material";

const HeaderLayoutDashboard = lazy(() => import("./header"));
const NavLayoutDashboard = lazy(() => import("./nav"));

export default () => {
  return (
    <WhapperLayoutDashboard>
      <HeaderLayoutDashboard />
      <Toolbar sx={{ height: "79px" }} />
      <ContainerLayoutDashboard>
        <NavLayoutDashboard />
        <ContentLayoutDashboard>
          <Outlet />
        </ContentLayoutDashboard>
      </ContainerLayoutDashboard>
    </WhapperLayoutDashboard>
  );
};

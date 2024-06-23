import {
  AccountBoxTwoTone,
  AssignmentTwoTone,
  TerminalTwoTone,
} from "@mui/icons-material";
import {
  NavItemList,
  NavListLayoutDashboard,
  WhapperNavLayoutDashboard,
} from "./styles";
import { Link, ListItemButton, ListItemText } from "@mui/material";

export default () => {
  return (
    <WhapperNavLayoutDashboard>
      <NavListLayoutDashboard>
        <NavItemList
          component="a"
          href="/dashboard/presentation"
          active={window.location.pathname.includes("presentation")}
        >
          <AccountBoxTwoTone /> Apresentação
        </NavItemList>
        <NavItemList
          component="a"
          href="/dashboard/posts"
          active={window.location.pathname.includes("posts")}
        >
          <AssignmentTwoTone /> Postagens
        </NavItemList>
        <NavItemList
          component="a"
          href="/dashboard/projects"
          active={window.location.pathname.includes("projects")}
        >
          <TerminalTwoTone /> Projeto
        </NavItemList>
      </NavListLayoutDashboard>
    </WhapperNavLayoutDashboard>
  );
};

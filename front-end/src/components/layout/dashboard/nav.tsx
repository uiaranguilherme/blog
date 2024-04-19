import { AccountBoxTwoTone, AssignmentTwoTone, TerminalTwoTone } from "@mui/icons-material";
import { NavItemList, NavListLayoutDashboard, WhapperNavLayoutDashboard } from "./styles";

export default () => {
    return(
        <WhapperNavLayoutDashboard>
            <NavListLayoutDashboard>
                <NavItemList 
                    active={window.location.pathname.includes("presentation")}
                >
                    <AccountBoxTwoTone /> Apresentação
                </NavItemList>
                <NavItemList 
                    active={window.location.pathname.includes("posts")}
                >
                    <AssignmentTwoTone/> Postagens
                </NavItemList>
                <NavItemList 
                    active={window.location.pathname.includes("projects")}
                >
                    <TerminalTwoTone/> Projeto
                </NavItemList>
            </NavListLayoutDashboard>
        </WhapperNavLayoutDashboard>
    );
}
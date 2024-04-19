/** @format */
import { IconButton } from "@mui/material";
import {
  WhapperHeaderLayoutMain,
  Logo,
  NavHeaderLayoutMain,
  NavItemHeaderLayoutMain,
  ContainerHeaderLayoutMain,
} from "./styles";
import { DarkModeTwoTone, LightModeTwoTone } from "@mui/icons-material";
import useTheme from "../../../theme";
import When from "../../when";
//import { useNavigate } from "react-router-dom";
import { useScrollWindow } from "../../../hooks";
import NavButton from "./nav-button";

export default () => {
  var { paletteMode, changeTheme } = useTheme();
  var scroll = useScrollWindow();

  return (
    <WhapperHeaderLayoutMain elevation={scroll > 10 ? 1 : 0} position='fixed'>
      <ContainerHeaderLayoutMain>
        <When case={window.location.pathname !== "/"}>
          <a href='/'>
            <Logo height='60px' width='80px' src='/imgs/logo.svg' />
          </a>
        </When>
        <When case={window.location.pathname === "/"}>
          <div></div>
        </When>
        <NavHeaderLayoutMain>
          <NavButton label='1. Sobre Mim' link='/about-me' />
          <NavButton label='2. Projetos' link='/projects' />
          <NavButton label='3. Contato' link='/contact-us' />
          <NavItemHeaderLayoutMain
            href='/blog'
            disableElevation
            variant='contained'>
            Blog
          </NavItemHeaderLayoutMain>
          <IconButton onClick={changeTheme}>
            {paletteMode !== "light" ? (
              <LightModeTwoTone color='primary' />
            ) : (
              <DarkModeTwoTone color='primary' />
            )}
          </IconButton>
        </NavHeaderLayoutMain>
      </ContainerHeaderLayoutMain>
    </WhapperHeaderLayoutMain>
  );
};

/** @format */

import { Fade, Typography } from "@mui/material";
import {
  WhapperHomePage,
  WhapperLogoHome,
  LogoHome,
  WhapperApresentation,
} from "./styles";

export default () => {
  return (
    <WhapperHomePage>
      <Fade in={true} timeout={1000}>
        <WhapperLogoHome>
          <LogoHome src='/imgs/logo.svg' />
        </WhapperLogoHome>
      </Fade>
      <WhapperApresentation>
        <Fade in={true} timeout={1500}>
          <Typography color='InactiveCaptionText' variant='h5'>
            Olá, sou
          </Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Typography fontWeight='600' variant='h2'>
            Uiaran Guilherme
          </Typography>
        </Fade>
        <Fade in={true} timeout={2500}>
          <Typography variant='h4'>Desenvolvedor full stack</Typography>
        </Fade>
      </WhapperApresentation>
    </WhapperHomePage>
  );
};

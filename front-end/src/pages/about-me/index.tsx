/** @format */

import { Fade, Typography } from "@mui/material";
import {
  WhapperPageAboutMe,
  ContainerPageAboutMe,
  ImgAboutMe,
  DescriptionAboutMe,
  SkilsAboutMe,
  Title,
  ItemSkilAboutMe,
  HistoryAboutMe,
  ItemHistory,
  ItemHistoryDateAboutMe,
  ItemDescriptionAboutMe,
  ItemNameCompany,
  ItemOfficeCompany,
  ItemOfficeCompanyDescription,
} from "./styles";
import { Footer } from "../../components";

export default () => {
  return (
    <WhapperPageAboutMe>
      <Fade in timeout={800}>
        <ContainerPageAboutMe>
          <ImgAboutMe src='/imgs/foto.jpeg' />
          <DescriptionAboutMe>
            Olá me chamo <span>Uiaran Guilherme Campos de Lima</span>, sou
            desenvolvedor Full-Stack em Node. <br />
            Meu interesse pela técnologia começou a um bom tempo, em minha
            adolecencia, no começo queria trabalhar com animações tanto 3D
            quanto 2D, então fiz cursos nesse area, naquela época no Blender 3D,
            Photoshop, Coreldraw, porém por causa das dificuldades de achar
            espaço nesta area acabei me afastanto da técnologia e cheguei a
            cursar História.
          </DescriptionAboutMe>
          <SkilsAboutMe>
            <Title>
              <div></div>{" "}
              <Typography variant='h5'>Minhas Habilidades são:</Typography>
            </Title>
            <ItemSkilAboutMe variant='body2'>JavaScript</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>CSS</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>React</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>NextJs</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>Express</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>MongoDB</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>SQL</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>Sequelize</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>TypeORM</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>.Net</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>Windows</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>Linux</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>Photoshop</ItemSkilAboutMe>
            <ItemSkilAboutMe variant='body2'>Coreldraw</ItemSkilAboutMe>
          </SkilsAboutMe>
          <HistoryAboutMe>
            <Title>
              <div></div> <Typography variant='h5'>Histórico:</Typography>
            </Title>
            <ItemHistory>
              <ItemHistoryDateAboutMe variant='body1' fontWeight='600'>
                {new Date().toLocaleDateString()} -{" "}
                {new Date().toLocaleDateString()}
              </ItemHistoryDateAboutMe>
              <ItemDescriptionAboutMe>
                <ItemNameCompany variant='h6' fontWeight='600'>
                  Squadra
                </ItemNameCompany>
                <ItemOfficeCompany
                  color='GrayText'
                  variant='overline'
                  fontWeight='600'>
                  Desenvolvedor Front-End
                </ItemOfficeCompany>
                <ItemOfficeCompanyDescription>
                  O trabalho que ocupo na Squadra é de desenvolvedor Full Stack,
                  atuo em novas implementações, como também em manutenções nos
                  projetos da Tim e Oi
                </ItemOfficeCompanyDescription>
              </ItemDescriptionAboutMe>
            </ItemHistory>
            <ItemHistory>
              <ItemHistoryDateAboutMe variant='body1' fontWeight='600'>
                {new Date().toLocaleDateString()} - Atual
              </ItemHistoryDateAboutMe>
              <ItemDescriptionAboutMe>
                <ItemNameCompany variant='h6' fontWeight='600'>
                  Squadra
                </ItemNameCompany>
                <ItemOfficeCompany
                  color='GrayText'
                  variant='overline'
                  fontWeight='600'>
                  Desenvolvedor Front-End
                </ItemOfficeCompany>
                <ItemOfficeCompanyDescription>
                  O trabalho que ocupo na Squadra é de desenvolvedor Full Stack,
                  atuo em novas implementações, como também em manutenções nos
                  projetos da Tim e Oi
                </ItemOfficeCompanyDescription>
              </ItemDescriptionAboutMe>
            </ItemHistory>
          </HistoryAboutMe>
        </ContainerPageAboutMe>
      </Fade>
      <Footer />
    </WhapperPageAboutMe>
  );
};

import { Button, Divider, Pagination } from "@mui/material";
import {
  WhapperPresentationPage,
  ContainerPresentation,
  WhapperImagePresentation,
  ImagePresentation,
  ContainerOptionsEditImage,
  ContainerHistoryCompany,
  HeaderHistoryCompany,
  ContentHistoryCompany,
  FooterHistoryCompany,
  ContentImagePresentation,
  ItemHistoryDateAboutMe,
  ItemNameCompany,
  ItemDescriptionAboutMe,
  ItemOfficeCompany,
  ItemHistory,
  ItemOfficeCompanyDescription,
  ContainerRickText,
  ActionsRickText,
} from "./styles";
import { AddAPhotoTwoTone } from "@mui/icons-material";
import RichTextMarkdown from "../../../components/rich-text-markdown";
import { ButtonSelectImage } from "../../../components";
import useAboutMe from "../../../hooks/use-about-me";

export default () => {
  const { values, handleSaveImage, handleSubmit, handleChange } = useAboutMe();

  return (
    <WhapperPresentationPage>
      <form onSubmit={handleSubmit}>
        <ContainerPresentation>
          <ContentImagePresentation>
            <WhapperImagePresentation>
              <ImagePresentation
                src={values.image !== null ? values.image : "/imgs/foto.jpeg"}
              />
              <ContainerOptionsEditImage>
                <ButtonSelectImage
                  onSelectImage={handleSaveImage}
                  variant="outlined"
                  startIcon={<AddAPhotoTwoTone />}
                >
                  Editar imagem
                </ButtonSelectImage>
              </ContainerOptionsEditImage>
            </WhapperImagePresentation>
          </ContentImagePresentation>
          <ContainerRickText>
            <RichTextMarkdown id="aboutMe" onChange={handleChange}>
              {values.aboutMe}
            </RichTextMarkdown>
            <ActionsRickText>
              <Button type="submit" variant="outlined">
                Salvar
              </Button>
            </ActionsRickText>
          </ContainerRickText>
        </ContainerPresentation>
      </form>
      <Divider />
      <ContainerHistoryCompany>
        <HeaderHistoryCompany>
          <Button disableElevation variant="contained">
            Adicionar novo histórico
          </Button>
        </HeaderHistoryCompany>
        <ContentHistoryCompany>
          <ItemHistory>
            <ItemHistoryDateAboutMe variant="body1" fontWeight="600">
              {new Date().toLocaleDateString()} -{" "}
              {new Date().toLocaleDateString()}
            </ItemHistoryDateAboutMe>
            <ItemDescriptionAboutMe>
              <ItemNameCompany variant="h6" fontWeight="600">
                Squadra
              </ItemNameCompany>
              <ItemOfficeCompany
                color="GrayText"
                variant="overline"
                fontWeight="600"
              >
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
            <ItemHistoryDateAboutMe variant="body1" fontWeight="600">
              {new Date().toLocaleDateString()} - Atual
            </ItemHistoryDateAboutMe>
            <ItemDescriptionAboutMe>
              <ItemNameCompany variant="h6" fontWeight="600">
                Squadra
              </ItemNameCompany>
              <ItemOfficeCompany
                color="GrayText"
                variant="overline"
                fontWeight="600"
              >
                Desenvolvedor Front-End
              </ItemOfficeCompany>
              <ItemOfficeCompanyDescription>
                O trabalho que ocupo na Squadra é de desenvolvedor Full Stack,
                atuo em novas implementações, como também em manutenções nos
                projetos da Tim e Oi
              </ItemOfficeCompanyDescription>
            </ItemDescriptionAboutMe>
          </ItemHistory>
        </ContentHistoryCompany>
        <FooterHistoryCompany>
          <Pagination count={10} />
        </FooterHistoryCompany>
      </ContainerHistoryCompany>
    </WhapperPresentationPage>
  );
};

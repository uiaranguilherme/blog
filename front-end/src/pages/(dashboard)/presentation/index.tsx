import { Button, Divider, Pagination } from "@mui/material";
import {
  WhapperPresentationPage,
  ContainerPresentation,
  WhapperImagePresentation,
  ImagePresentation,
  ContainerOptionsEditImage,
  WhapperPresentationText,
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
} from "./styles";
import { AddAPhotoTwoTone } from "@mui/icons-material";
import RichTextMarkdown from "../../../components/rich-text-markdown";

export default () => {
  const texto = "# Hi, *Pluto*!";
  return (
    <WhapperPresentationPage>
      <ContainerPresentation>
        <ContentImagePresentation>
          <WhapperImagePresentation>
            <ImagePresentation src="/imgs/foto.jpeg" />
            <ContainerOptionsEditImage>
              <Button variant="outlined" startIcon={<AddAPhotoTwoTone />}>
                Trocar Foto
              </Button>
            </ContainerOptionsEditImage>
          </WhapperImagePresentation>
        </ContentImagePresentation>
        <ContainerRickText>
          <RichTextMarkdown handleSave={() => {}}>{texto}</RichTextMarkdown>
        </ContainerRickText>
      </ContainerPresentation>
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

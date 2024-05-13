import { Button, Divider, Pagination, Input } from "@mui/material";
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
} from "./styles";
import { AddAPhotoTwoTone } from "@mui/icons-material";
import RichTextMarkdown from "../../../components/rich-text-markdown";
import { useState } from "react";
import { ButtonSelectImage } from "../../../components";

export default () => {
  const texto = "#### Hi, *Pluto*!";
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleImageSelect = (e: any) => {
    const imageFile = e.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  return (
    <WhapperPresentationPage>
      <ContainerPresentation>
        <ContentImagePresentation>
          <WhapperImagePresentation>
            <ImagePresentation
              src={selectedImage !== null ? selectedImage : "/imgs/foto.jpeg"}
            />
            <ContainerOptionsEditImage>
              <ButtonSelectImage
                onSelectImage={handleImageSelect}
                variant="outlined"
                startIcon={<AddAPhotoTwoTone />}
              >
                Editar imagem
              </ButtonSelectImage>
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

import { AddAPhotoTwoTone } from "@mui/icons-material";
import { ButtonSelectImage } from "../buttons";
import {
  ContainerOptionsEditImage,
  ContentImagePresentation,
  ImagePresentation,
  WhapperImagePresentation,
} from "./styles";
import useEditorImage from "../../hooks/use-editor-image";

interface IEditorImageProps {
  image: string;
  handleSaveImage: (value: string) => void;
  width: string;
  height: string;
  objectFit: "fill" | "contain" | "cover" | "none" | "scale-down";
}

export default (props: IEditorImageProps) => {
  const { handleSaveImage } = useEditorImage(props.handleSaveImage);
  return (
    <ContentImagePresentation
      height={props.height}
      width={props.width}
      objectFit={props.objectFit}
    >
      <WhapperImagePresentation>
        <ImagePresentation
          src={props.image !== null ? props.image : "/imgs/foto.jpeg"}
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
  );
};

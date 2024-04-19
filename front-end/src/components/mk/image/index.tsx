import { ExtraProps } from "react-markdown";
import { Image, WhapperImage } from "./styles";

export default (
  props: React.ClassAttributes<HTMLImageElement> &
    React.ImgHTMLAttributes<HTMLImageElement> &
    ExtraProps
) => {
  return (
    <WhapperImage>
      <Image {...props} />
    </WhapperImage>
  );
};

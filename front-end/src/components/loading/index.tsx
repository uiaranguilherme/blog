/** @format */
import { WhapperImage, WhapperLoading, Image } from "./styles";

interface ILoadingProps {
  open: boolean;
}

export default ({ open }: ILoadingProps) => {
  return (
    <WhapperLoading open={open}>
      <WhapperImage size="10rem">
        <Image src="/imgs/logo.svg" />
      </WhapperImage>
    </WhapperLoading>
  );
};

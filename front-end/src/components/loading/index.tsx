/** @format */
import { WhapperImage, WhapperLoading, Image } from "./styles";

export default () => {
  return (
    <WhapperLoading open={true}>
      <WhapperImage size='10rem'>
        <Image src='/imgs/logo.svg' />
      </WhapperImage>
    </WhapperLoading>
  );
};

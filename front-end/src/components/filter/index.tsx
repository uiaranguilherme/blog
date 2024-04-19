/** @format */

import { WhapperFilterLayout } from "./styles";

export default ({ src, opacity }: { src: string; opacity: number }) => {
  return <WhapperFilterLayout opacity={opacity} src={src} />;
};

import { ExtraProps } from "react-markdown";
import { WhapperItalic } from "./styles";

export default (
  props: React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement> &
    ExtraProps
) => {
  return <WhapperItalic>{props.children}</WhapperItalic>;
};

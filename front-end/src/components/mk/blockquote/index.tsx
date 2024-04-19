import { ExtraProps } from "react-markdown";
import { WhapperBlockquote } from "./styles";

export default (
  props: React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement> &
    ExtraProps
) => {
  return <WhapperBlockquote>{props.children}</WhapperBlockquote>;
};

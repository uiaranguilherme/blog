import { ExtraProps } from "react-markdown";
import { WhapperH1 } from "./styles";

export default (
  props: React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement> &
    ExtraProps
) => {
  return <WhapperH1>{props.children}</WhapperH1>;
};

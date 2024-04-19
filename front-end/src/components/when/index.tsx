/** @format */

import { ReactNode } from "react";

interface IWhenProps {
  children: ReactNode;
  case: boolean;
}

export default (props: IWhenProps) => {
  if (props.case === true) return props.children;

  return null;
};

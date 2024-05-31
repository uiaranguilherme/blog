import { useContext } from "react";
import { ContextLoading } from "../context/context-loading";

export default () => {
  const { isLoading, handleChangeLoading } = useContext(ContextLoading);

  return { isLoading, handleChangeLoading };
};

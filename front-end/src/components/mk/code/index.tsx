import { FolderTwoTone } from "@mui/icons-material";
import { WhapperCode, ContainerCode, PathCode } from "./styles";
import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  if (typeof children === "string") {
    const regex = children.match(/path`([^`]*)`/);

    if (regex !== null) {
      var path = regex.find((s) => s.includes("path") === false);
      children = children
        .replace(regex[0], "")
        .trim()
        .split("\n")
        .map((linha) => (
          <>
            <span>{linha}</span>
            <br />
          </>
        ));

      return (
        <WhapperCode>
          <PathCode>
            <FolderTwoTone />
            {path}
          </PathCode>
          <ContainerCode>
            <code>{children}</code>
          </ContainerCode>
        </WhapperCode>
      );
    }
  }

  return <WhapperCode>{children}</WhapperCode>;
};

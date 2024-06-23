import { Button, Tab, Tabs } from "@mui/material";
import {
  WhapperRichTextMarkdown,
  HeaderRichTextMarkdown,
  ContainerRichTextMarkdown,
  FooterRichTextMarkdown,
  InputTextRich,
} from "./styles";
import { useState } from "react";
import { When } from "..";
import Mk from "../mk";

interface IRickTextMarckdownProps {
  children: string;
  onChange: any;
  id: string;
  label?: string | undefined;
  rows: number;
}

export default ({
  children,
  onChange,
  id,
  label,
  rows,
}: IRickTextMarckdownProps) => {
  const [isPreVisualization, setIsPreVisualization] = useState<boolean>(true);

  return (
    <WhapperRichTextMarkdown>
      <HeaderRichTextMarkdown>
        <Tabs value={isPreVisualization ? 0 : 1}>
          <Tab
            label="Pré-Visualização"
            onClick={() => setIsPreVisualization(true)}
          />
          <Tab label="Editar" onClick={() => setIsPreVisualization(false)} />
        </Tabs>
      </HeaderRichTextMarkdown>
      <ContainerRichTextMarkdown>
        <When case={isPreVisualization}>
          <Mk>{children}</Mk>
        </When>
        <When case={isPreVisualization === false}>
          <InputTextRich
            fullWidth
            label={label ?? label}
            id={id}
            multiline
            maxRows={rows}
            minRows={rows}
            onChange={onChange}
            value={children}
          />
        </When>
      </ContainerRichTextMarkdown>
    </WhapperRichTextMarkdown>
  );
};

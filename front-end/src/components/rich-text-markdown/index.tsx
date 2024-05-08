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
  handleSave: () => void;
}

export default ({ children }: IRickTextMarckdownProps) => {
  const [isPreVisualization, setIsPreVisualization] = useState<boolean>(true);
  const [value, setValue] = useState<string>(children);

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
          <Mk>{value}</Mk>
        </When>
        <When case={isPreVisualization === false}>
          <InputTextRich
            fullWidth
            id="text-edit-rich-text-markdown"
            multiline
            maxRows={13}
            minRows={13}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </When>
      </ContainerRichTextMarkdown>
      <FooterRichTextMarkdown>
        <When case={isPreVisualization === false}>
          <Button variant="outlined">Salvar</Button>
        </When>
      </FooterRichTextMarkdown>
    </WhapperRichTextMarkdown>
  );
};

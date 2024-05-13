import { Box, styled, TextField } from "@mui/material";

export const WhapperRichTextMarkdown = styled(Box)({
  width: "100%",
  height: "100%",
});

export const HeaderRichTextMarkdown = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  borderBottom: 1,
  borderColor: theme.palette.grey["400"],
  borderBottomStyle: "solid",
}));

export const ContainerRichTextMarkdown = styled(Box)({
  height: "100%",
});

export const InputTextRich = styled(TextField)({
  padding: "10px 0",
});

export const FooterRichTextMarkdown = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
});

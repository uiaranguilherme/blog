import { AppBar, Button, Dialog } from "@mui/material";
import {
  ModalMenuAddPost,
  ModalMenuAddPostActions,
  ModalMenuAddPostTitle,
  ModalContentAddNewPost,
} from "./styles";
import { RichTextMarkdown } from "../../../../components";
import ModalInfoPost from "../modal-info-post";

export default () => {
  return (
    <Dialog fullScreen open={true}>
      <AppBar position="relative" elevation={0} color="transparent">
        <ModalMenuAddPost>
          <ModalMenuAddPostTitle variant="h6">
            Adicionar Postagem
          </ModalMenuAddPostTitle>
          <ModalMenuAddPostActions>
            <Button disableElevation variant="outlined">
              Cancelar
            </Button>
            <Button disableElevation variant="contained">
              Salvar
            </Button>
          </ModalMenuAddPostActions>
        </ModalMenuAddPost>
      </AppBar>
      <ModalContentAddNewPost>
        <RichTextMarkdown rows={17} onChange={() => {}} id="post">
          ## helllo
        </RichTextMarkdown>
      </ModalContentAddNewPost>
      <ModalInfoPost
        initialValues={{
          description: "",
          img: "",
          name: "",
          tags: [],
        }}
      />
    </Dialog>
  );
};

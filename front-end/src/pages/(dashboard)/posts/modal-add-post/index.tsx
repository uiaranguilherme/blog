import {
  AppBar,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import {
  ModalMenuAddPost,
  ModalMenuAddPostActions,
  ModalMenuAddPostTitle,
  ModalContentAddNewPost,
} from "./styles";
import { ImageEditor, RichTextMarkdown, Stack } from "../../../../components";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import {
  WhapperModalInfoPost,
  ModalInfoPostWhapperTags,
} from "../modal-info-post/styles";
import { useState } from "react";
import When from "../../../../components/when";

export default () => {
  const [isInfo, setIsInfo] = useState<boolean>(false);
  const handleIsInfoChange = () => setIsInfo(!isInfo);

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
        <Formik
          initialValues={{
            description: "",
            img: "",
            name: "",
            tags: [],
            content: "",
          }}
          onSubmit={() => {}}
        >
          {({ values, handleChange }) => (
            <Container>
              <Tabs value={isInfo ? 0 : 1}>
                <Tab label="Postagem" onClick={() => handleIsInfoChange()} />
                <Tab
                  label="Informações Técnicas"
                  onClick={() => handleIsInfoChange()}
                />
              </Tabs>
              <Divider />
              <When case={!isInfo}>
                <Form style={{ overflow: "hidden" }}>
                  <WhapperModalInfoPost container rowSpacing={2}>
                    <Grid item xs={12}>
                      <ImageEditor
                        height="15rem"
                        width="100%"
                        objectFit="cover"
                        image="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-1-580x386.jpg"
                        handleSaveImage={() => {}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="name"
                        size="small"
                        label="Nome da Postagem*"
                        onChange={handleChange}
                        value={values.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="description"
                        fullWidth
                        multiline
                        maxRows={8}
                        minRows={8}
                        size="small"
                        label="Descrição da Postagem*"
                        value={values.description}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={1}
                        container
                        xs={12}
                      >
                        <Grid item xs={10}>
                          <TextField
                            fullWidth
                            name="tag-name"
                            size="small"
                            label="Nome da Tag"
                            value={values.description}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <Button
                            fullWidth
                            disableElevation
                            variant="contained"
                          >
                            Adicionar
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <ModalInfoPostWhapperTags aria-label="Tags*:">
                          <legend>Tags* :</legend>
                          {["Java", "Front-end"].map((stack, index) => (
                            <Stack key={index}>{stack}</Stack>
                          ))}
                        </ModalInfoPostWhapperTags>
                      </Grid>
                    </Grid>
                  </WhapperModalInfoPost>
                </Form>
              </When>
              <When case={isInfo}>
                <RichTextMarkdown
                  rows={17}
                  onChange={handleChange}
                  id="content"
                >
                  {values.content}
                </RichTextMarkdown>
              </When>
            </Container>
          )}
        </Formik>
      </ModalContentAddNewPost>
    </Dialog>
  );
};

import { Button, Dialog, Divider, Grid, TextField } from "@mui/material";
import {
  ModalInfoPostWhapperTags,
  ModalTitle,
  WhapperModalInfoPost,
} from "./styles";
import { Form, Formik } from "formik";
import { ImageEditor, Stack } from "../../../../components";

interface ModalInfoPost {
  initialValues: {
    name: string;
    img: string;
    description: string;
    tags: [];
  };
}

export default ({ initialValues }: ModalInfoPost) => {
  return (
    <Dialog maxWidth="md" fullWidth open={false} onClose={() => {}}>
      <ModalTitle>Informações da Postagem:</ModalTitle>
      <Divider />
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ values, handleChange }) => (
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
                  label="Nome da Postagem"
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
                  label="Descrição da Postagem"
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
                    <Button fullWidth disableElevation variant="contained">
                      Adicionar
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <ModalInfoPostWhapperTags aria-label="Tags:">
                    <legend>Tags</legend>
                    {["Java", "Front-end"].map((stack, index) => (
                      <Stack key={index}>{stack}</Stack>
                    ))}
                  </ModalInfoPostWhapperTags>
                </Grid>
              </Grid>
            </WhapperModalInfoPost>
            <Divider />
            <Grid
              padding="0.5rem 0.5rem"
              height="3rem"
              width="100%"
              display="flex"
              justifyContent="flex-end"
              item
            >
              <Button
                sx={{ marginRight: "1rem" }}
                disableElevation
                onClick={() => {}}
                variant="outlined"
              >
                Cancelar
              </Button>
              <Button disableElevation type="submit" variant="contained">
                Salvar
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

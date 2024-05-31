import { Button, Dialog, Divider, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { ModalTitle, WhapperModalOffice } from "./styles";

interface IModalOfficeProps {
  open: boolean;
  initialValues: {
    admissionDate: string;
    dismissalDate: string;
    companyName: string;
    office: string;
    jobDescription: string;
  };
  onClose: () => void;
  onSave: (props: any) => Promise<boolean>;
}

export default (props: IModalOfficeProps) => {
  const handleSubmit = async (values: any) => {
    const isSuccess = await props.onSave(values);
    if (isSuccess) {
      props.onClose();
    }
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <ModalTitle>Adicionar Histórico de Trabalho:</ModalTitle>
      <Divider />
      <Formik initialValues={props.initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form>
            <WhapperModalOffice container rowSpacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="admissionDate"
                  type="date"
                  size="small"
                  label="Data de admição"
                  onChange={handleChange}
                  value={values.admissionDate}
                  sx={{ marginRight: "1rem" }}
                />
                <TextField
                  name="dismissalDate"
                  type="date"
                  size="small"
                  label="Data de demissão"
                  value={values.dismissalDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="companyName"
                  fullWidth
                  size="small"
                  label="Nome da empresa"
                  value={values.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="office"
                  fullWidth
                  size="small"
                  label="Cargo"
                  value={values.office}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  maxRows={8}
                  minRows={8}
                  size="small"
                  label="Descrição do cargo"
                  name="jobDescription"
                  value={values.jobDescription}
                  onChange={handleChange}
                />
              </Grid>
              <Grid width="100%" display="flex" justifyContent="flex-end" item>
                <Button
                  sx={{ marginRight: "1rem" }}
                  disableElevation
                  onClick={props.onClose}
                  variant="outlined"
                >
                  Cancelar
                </Button>
                <Button disableElevation type="submit" variant="contained">
                  Salvar
                </Button>
              </Grid>
            </WhapperModalOffice>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

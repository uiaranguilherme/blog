/** @format */

import { Button, Fade, Grid, MenuItem, TextField } from "@mui/material";
import {
  AlternateEmailOutlined,
  PhoneAndroidTwoTone,
  SendOutlined,
} from "@mui/icons-material";
import { Card, Footer } from "../../components";
import {
  WhapperContactUsPage,
  FormContactUs,
  OthersContacts,
  WhapperOtherContact,
  FooterPageContactUs,
  ContactUsTitle,
} from "./styles";

export default () => {
  return (
    <WhapperContactUsPage>
      <Fade in timeout={500}>
        <FormContactUs>
          <ContactUsTitle>
            <div></div> <h5>E-mail:</h5>
          </ContactUsTitle>
          <Grid container xs={12} rowSpacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth size='small' label='Nome Completo*' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth size='small' label='E-mail*' />
            </Grid>
            <Grid item xs={12}>
              <TextField select fullWidth size='small' label='Assunto*'>
                <MenuItem>Desenvolvimento Front-end</MenuItem>
                <MenuItem>Desenvolvimento Back-end</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                size='small'
                multiline
                rows={5}
                label='Mensagem'
              />
            </Grid>
            <Grid display='flex' justifyContent='flex-end' item xs={12}>
              <Button
                endIcon={<SendOutlined sx={{ transform: "rotate(-90deg)" }} />}
                variant='contained'
                disableElevation>
                Enviar Mensagem
              </Button>
            </Grid>
          </Grid>
        </FormContactUs>
      </Fade>
      <Fade in timeout={1500}>
        <OthersContacts>
          <ContactUsTitle>
            <div></div> <h5>Outros Contatos:</h5>
          </ContactUsTitle>
          <Card>
            <WhapperOtherContact>
              <AlternateEmailOutlined color='action' />
              uiaran@hotmail.com
            </WhapperOtherContact>
          </Card>
          <Card>
            <WhapperOtherContact>
              <PhoneAndroidTwoTone color='action' />
              (41) 99749-8695
            </WhapperOtherContact>
          </Card>
        </OthersContacts>
      </Fade>
      <FooterPageContactUs>
        <Footer />
      </FooterPageContactUs>
    </WhapperContactUsPage>
  );
};

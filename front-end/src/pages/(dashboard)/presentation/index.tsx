import { Alert, Button, Divider, Pagination } from "@mui/material";
import {
  WhapperPresentationPage,
  ContainerPresentation,
  ContainerHistoryCompany,
  HeaderHistoryCompany,
  ContentHistoryCompany,
  FooterHistoryCompany,
  ItemHistoryDateAboutMe,
  ItemNameCompany,
  ItemDescriptionAboutMe,
  ItemOfficeCompany,
  ItemHistory,
  ItemOfficeCompanyDescription,
  ContainerRickText,
  ActionsRickText,
} from "./styles";
import RichTextMarkdown from "../../../components/rich-text-markdown";
import { ImageEditor, When } from "../../../components";
import { useAboutMe, useJobHistory } from "../../../hooks";
import ModalOffice from "./modal-office";

export default () => {
  const { values, handleSubmit, handleChange, setFieldValue } = useAboutMe();
  const {
    history,
    job,
    modal,
    handleOpenModal,
    formatJobInitialValue,
    handleSaveNewJobHistory,
  } = useJobHistory();

  return (
    <WhapperPresentationPage>
      <form onSubmit={handleSubmit}>
        <ContainerPresentation>
          <ImageEditor
            image={values.image}
            handleSaveImage={(image) => setFieldValue("image", image)}
          />
          <ContainerRickText>
            <RichTextMarkdown rows={13} id="aboutMe" onChange={handleChange}>
              {values.aboutMe}
            </RichTextMarkdown>
            <ActionsRickText>
              <Button type="submit" variant="outlined">
                Salvar
              </Button>
            </ActionsRickText>
          </ContainerRickText>
        </ContainerPresentation>
      </form>
      <Divider />
      <ContainerHistoryCompany>
        <HeaderHistoryCompany>
          <Button
            onClick={handleOpenModal}
            disableElevation
            variant="contained"
          >
            Adicionar novo histórico
          </Button>
        </HeaderHistoryCompany>
        <When
          case={Array.isArray(history.companys) && history.companys.length > 0}
        >
          <ContentHistoryCompany>
            {history.companys.map((job, index) => (
              <ItemHistory key={index}>
                <ItemHistoryDateAboutMe variant="body1" fontWeight="600">
                  {new Date(job.when_arrived).toLocaleDateString()} -{" "}
                  {new Date(job.when_came_out).toLocaleDateString()}
                </ItemHistoryDateAboutMe>
                <ItemDescriptionAboutMe>
                  <ItemNameCompany variant="h6" fontWeight="600">
                    {job.company}
                  </ItemNameCompany>
                  <ItemOfficeCompany
                    color="GrayText"
                    variant="overline"
                    fontWeight="600"
                  >
                    {job.office}
                  </ItemOfficeCompany>
                  <ItemOfficeCompanyDescription>
                    {job.office_description}
                  </ItemOfficeCompanyDescription>
                </ItemDescriptionAboutMe>
              </ItemHistory>
            ))}
          </ContentHistoryCompany>
          <FooterHistoryCompany>
            <Pagination count={history.quantity_items / 10} />
          </FooterHistoryCompany>
        </When>
        <When
          case={
            Array.isArray(history.companys) && history.companys.length === 0
          }
        >
          <Alert sx={{ m: "1rem" }} severity="warning">
            Não foi encotrado histórico
          </Alert>
        </When>
      </ContainerHistoryCompany>
      <ModalOffice
        initialValues={formatJobInitialValue(job)}
        open={modal}
        onClose={handleOpenModal}
        onSave={handleSaveNewJobHistory}
      />
    </WhapperPresentationPage>
  );
};

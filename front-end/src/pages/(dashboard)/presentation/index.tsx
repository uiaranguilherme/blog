import { Box, Button, Divider, Pagination } from "@mui/material";
import { 
    WhapperPresentationPage, 
    ContainerPresentation, 
    WhapperImagePresentation, 
    ImagePresentation, 
    ContainerOptionsEditImage,
    WhapperPresentationText, 
    ContainerHistoryCompany, 
    HeaderHistoryCompany, 
    ContentHistoryCompany, 
    FooterHistoryCompany, 
    ContentImagePresentation,
    ItemHistoryDateAboutMe,
    ItemNameCompany,
    ItemDescriptionAboutMe,
    ItemOfficeCompany,
    ItemHistory,
    ItemOfficeCompanyDescription
} from "./styles";
import { AddAPhotoTwoTone } from "@mui/icons-material";

export default () => {
    return(
        <WhapperPresentationPage>
            <ContainerPresentation>
                <ContentImagePresentation>
                    <WhapperImagePresentation>
                        <ImagePresentation src="/imgs/foto.jpeg"/>
                        <ContainerOptionsEditImage>
                            <Button variant="outlined" startIcon={<AddAPhotoTwoTone/>}>Trocar Foto</Button>
                        </ContainerOptionsEditImage>
                    </WhapperImagePresentation>
                </ContentImagePresentation>
                <WhapperPresentationText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec efficitur nisi. Duis vitae ante sed ligula molestie porta. Aenean suscipit arcu eget felis interdum, ac scelerisque risus dignissim. Quisque pretium lacus ut libero finibus, id ornare turpis mollis. Fusce eros mi, suscipit quis nisi quis, pulvinar elementum sapien. Donec enim elit, auctor sit amet rutrum at, aliquam eget nunc. Cras et lectus ut nisi accumsan consequat non sed leo. Donec arcu turpis, vulputate ut velit commodo, fringilla accumsan sem. Morbi ornare mi sed nulla imperdiet interdum. Donec odio ipsum, porttitor nec eleifend a, imperdiet at sem. Proin ut semper massa. Fusce ac sem nisi. Fusce ultrices ex non egestas sollicitudin. Curabitur tincidunt sed diam vitae posuere. Maecenas lacinia eros a elit aliquet dignissim.

Phasellus massa tellus, malesuada eget velit sit amet, aliquet finibus massa. Proin et massa pretium, bibendum ipsum non, congue urna. Morbi a est at justo vehicula lobortis in quis tellus. Aenean vitae odio at ante vulputate ullamcorper. Quisque eget velit tempus, elementum tellus vitae, ullamcorper lacus. Aenean egestas risus a dignissim convallis. Pellentesque tempor, nulla a porttitor efficitur, sapien lacus facilisis nunc, vitae pellentesque dui risus sed dolor. Suspendisse pharetra tortor vel ultrices condimentum. Nulla facilisi. Suspendisse eu ullamcorper risus, non ullamcorper lorem. Fusce imperdiet nunc nec justo feugiat, nec cursus lorem porttitor. Mauris a ultricies mi. Donec arcu diam, pretium in ornare ut, aliquet eget dui. Aenean pellentesque vel quam lacinia sollicitudin. Pellentesque eleifend tellus nec magna dictum, nec sollicitudin est porta. Ut ut suscipit est.
                </WhapperPresentationText>
            </ContainerPresentation>
            <Divider/>
            <ContainerHistoryCompany>
                <HeaderHistoryCompany>
                    <Button disableElevation variant="contained">Adicionar novo histórico</Button>
                </HeaderHistoryCompany>
                <ContentHistoryCompany>
                    <ItemHistory>
                        <ItemHistoryDateAboutMe variant='body1' fontWeight='600'>
                            {new Date().toLocaleDateString()} -{" "}
                            {new Date().toLocaleDateString()}
                        </ItemHistoryDateAboutMe>
                        <ItemDescriptionAboutMe>
                            <ItemNameCompany variant='h6' fontWeight='600'>
                                Squadra
                            </ItemNameCompany>
                            <ItemOfficeCompany
                                color='GrayText'
                                variant='overline'
                                fontWeight='600'>
                                Desenvolvedor Front-End
                            </ItemOfficeCompany>
                            <ItemOfficeCompanyDescription>
                                O trabalho que ocupo na Squadra é de desenvolvedor Full Stack,
                                atuo em novas implementações, como também em manutenções nos
                                projetos da Tim e Oi
                            </ItemOfficeCompanyDescription>
                        </ItemDescriptionAboutMe>
                    </ItemHistory>
                    <ItemHistory>
                        <ItemHistoryDateAboutMe variant='body1' fontWeight='600'>
                            {new Date().toLocaleDateString()} - Atual
                        </ItemHistoryDateAboutMe>
                        <ItemDescriptionAboutMe>
                            <ItemNameCompany variant='h6' fontWeight='600'>
                                Squadra
                            </ItemNameCompany>
                            <ItemOfficeCompany
                                color='GrayText'
                                variant='overline'
                                fontWeight='600'>
                                Desenvolvedor Front-End
                            </ItemOfficeCompany>
                            <ItemOfficeCompanyDescription>
                                O trabalho que ocupo na Squadra é de desenvolvedor Full Stack,
                                atuo em novas implementações, como também em manutenções nos
                                projetos da Tim e Oi
                            </ItemOfficeCompanyDescription>
                        </ItemDescriptionAboutMe>
                    </ItemHistory>
                </ContentHistoryCompany>
                <FooterHistoryCompany>
                    <Pagination count={10}/>
                </FooterHistoryCompany>
            </ContainerHistoryCompany>
        </WhapperPresentationPage>
    );
}
/** @format */

import { Button, Grow } from "@mui/material";
import projects from "../../constants/projects";
import { GitHub, LaunchTwoTone } from "@mui/icons-material";
import {
  WhapperPageProjects,
  SharedParameters,
  ContainerProjects,
  WhappeProject,
  ContentProject,
  ProjectTitle,
  ProjectDescription,
  ProjectStacks,
  ProjectStack,
  ProjectButtonsActions,
  ButtonFilterProject,
  IconButtonActionProject,
  FooterContainerProjects,
} from "./styles";
import { Card, Footer } from "../../components";

export default () => {
  return (
    <WhapperPageProjects>
      <SharedParameters>
        <ButtonFilterProject disableElevation variant='contained'>
          Back-end
        </ButtonFilterProject>
        <ButtonFilterProject disableElevation>Font-end</ButtonFilterProject>
      </SharedParameters>
      <ContainerProjects>
        {projects.map((project, index) => (
          <Grow in timeout={index * 100}>
            <div>
              <Card>
                <WhappeProject>
                  <ContentProject>
                    <ProjectTitle variant='h6'>{project.name}</ProjectTitle>
                    <ProjectDescription color='GrayText' variant='body2'>
                      {project.description}
                    </ProjectDescription>
                    <ProjectStacks>
                      {project.stacks.map((stack) => (
                        <ProjectStack>{stack}</ProjectStack>
                      ))}
                    </ProjectStacks>
                  </ContentProject>
                  <ProjectButtonsActions>
                    <IconButtonActionProject>
                      <GitHub />
                    </IconButtonActionProject>
                    <IconButtonActionProject>
                      <LaunchTwoTone />
                    </IconButtonActionProject>
                  </ProjectButtonsActions>
                </WhappeProject>
              </Card>
            </div>
          </Grow>
        ))}
      </ContainerProjects>
      <FooterContainerProjects>
        <Button variant='outlined'>ver mais</Button>
      </FooterContainerProjects>
      <Footer />
    </WhapperPageProjects>
  );
};

import { ProjectRepository } from "@models"
import { IProject } from "../interfaces/iproject"
import IProjectModel from "src/db/models/interfaces/iproject"
import { Success } from "@infra"

export default async (projectBody: IProject) => {
  var project: IProjectModel = {
    ...projectBody,
    stacks: JSON.stringify(projectBody.stacks),
  }

  project = ProjectRepository.create(project)

  await ProjectRepository.save(project)

  return Success("Success in create project")
}

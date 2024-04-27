import { ProjectRepository } from "@models"
import { IProject } from "../interfaces/iproject"
import { Success } from "@infra"

export default async (project: IProject) => {
  project = ProjectRepository.create(project)

  await ProjectRepository.save(project)

  return Success("Success in create project")
}

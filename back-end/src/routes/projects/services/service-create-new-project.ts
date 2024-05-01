import { ProjectRepository } from "@models"
import { IProject } from "../interfaces/iproject"
import { Success } from "@infra"

export default async (project: IProject) => {
  const proj = ProjectRepository.create({
    ...project,
    stacks: JSON.stringify(project.stacks),
  })

  await ProjectRepository.save(proj)

  return Success("Success in create project")
}

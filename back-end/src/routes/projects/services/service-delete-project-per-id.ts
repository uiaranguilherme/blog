import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { ProjectRepository } from "@models"

export default async (id: string) => {
  var project = await ProjectRepository.findOne({ where: { id } })

  if (project === null || project === undefined) {
    return Exception(new BussinessError("Unabled find project"))
  }

  await ProjectRepository.delete(id)

  return Success("Success in delete project")
}

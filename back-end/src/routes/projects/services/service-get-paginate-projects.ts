import { ProjectRepository } from "@models"
import IParamsPaginateProjects from "../interfaces/iget-projects-paginate"
import { Exception, Success } from "@infra"
import { BussinessError } from "@handler"

export default async (params: IParamsPaginateProjects) => {
  var projects = null

  if (params.type !== null && params.type !== "" && params.type !== undefined) {
    projects = await ProjectRepository.find({ where: { type: params.type } })

    return Success({
      page: params.page,
      quantity_items: projects.length,
      projects: projects.slice(params.page * 10, params.page * params.amount + params.amount),
    })
  }

  return Exception(new BussinessError("Unable to obtain projects"))
}

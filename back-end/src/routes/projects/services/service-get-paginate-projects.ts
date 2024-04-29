import { ProjectRepository } from "@models"
import IParamsPaginateProjects from "../interfaces/iget-projects-paginate"
import { Success } from "@infra"

export default async (params: IParamsPaginateProjects) => {
  if (params.type !== null && params.type !== "" && params.type !== undefined) {
    const [items, totalItems] = await ProjectRepository.findAndCount({
      where: { type: params.type },
      take: params.amount,
      skip: params.amount * params.page,
    })

    return Success({
      page: params.page,
      quantity_items: totalItems,
      projects: items,
    })
  }

  const [items, totalItems] = await ProjectRepository.findAndCount({
    take: params.amount,
    skip: params.amount * params.page,
  })

  return Success({
    page: params.page,
    quantity_items: totalItems,
    projects: items,
  })
}

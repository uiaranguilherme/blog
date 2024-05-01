import { ProjectRepository } from "@models"
import IParamsPaginateProjects from "../interfaces/iget-projects-paginate"
import { Success } from "@infra"
import { IProject } from "../interfaces/iproject"

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

  const projects = items.map(item => ({
    ...item,
    stacks: JSON.parse(item.stacks),
  })) as IProject[]

  return Success({
    page: params.page,
    quantity_items: totalItems,
    projects: projects,
  })
}

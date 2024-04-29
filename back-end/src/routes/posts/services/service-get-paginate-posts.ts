import { PostRepository } from "@models"
import { Success } from "@infra"
import IParamsPaginatePosts from "../interfaces/iget-params-post-paginate"

export default async (params: IParamsPaginatePosts) => {
  var projects = null

  projects = await PostRepository.find({ select: ["id", "name", "img", "tags", "createdAt", "description"] })

  return Success({
    page: params.page,
    quantity_items: projects.length,
    projects: projects.slice(params.page * params.amount, params.page * params.amount + params.amount),
  })
}

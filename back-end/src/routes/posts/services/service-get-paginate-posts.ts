import { PostRepository } from "@models"
import { Success } from "@infra"
import IParamsPaginatePosts from "../interfaces/iget-params-post-paginate"

export default async (params: IParamsPaginatePosts) => {
  const [items, totalItems] = await PostRepository.findAndCount({
    select: ["id", "name", "img", "tags", "createdAt", "description"],
    take: params.amount,
    skip: params.page * params.amount,
  })

  return Success({
    page: params.page,
    quantity_items: totalItems,
    projects: items,
  })
}

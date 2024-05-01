import { PostRepository } from "@models"
import { Success } from "@infra"
import IParamsPaginatePosts from "../interfaces/iget-params-post-paginate"
import IPost from "../interfaces/ipost"

export default async (params: IParamsPaginatePosts) => {
  const [items, totalItems] = await PostRepository.findAndCount({
    select: ["id", "name", "img", "tags", "createdAt", "description"],
    take: params.amount,
    skip: params.page * params.amount,
  })

  var posts = items.map(item => ({
    ...item,
    tags: JSON.parse(item.tags),
  })) as IPost[]

  return Success({
    page: params.page,
    quantity_items: totalItems,
    projects: posts,
  })
}

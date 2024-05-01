import { PostRepository } from "@models"
import IPost from "../interfaces/ipost"
import { Success } from "@infra"

export default async (post: IPost) => {
  const pt = PostRepository.create({
    ...post,
    tags: JSON.stringify(post.tags),
  })

  await PostRepository.save(pt)

  return Success("Succes in create post")
}

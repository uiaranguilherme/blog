import { PostRepository } from "@models"
import IPost from "../interfaces/ipost"
import { Success } from "@infra"

export default async (post: IPost) => {
  post = PostRepository.create(post)

  await PostRepository.save(post)

  return Success("Succes in create post")
}

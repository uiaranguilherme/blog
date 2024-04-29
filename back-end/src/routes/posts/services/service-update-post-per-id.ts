import { PostRepository } from "@models"
import IPost from "../interfaces/ipost"
import { Exception, Success } from "@infra"
import { BussinessError } from "@handler"

export default async (id: string, postInUpdate: IPost) => {
  var post = await PostRepository.findOne({ where: { id } })

  if (post === undefined || post === null) {
    return Exception(new BussinessError("Unabled find post per id"))
  }

  post = PostRepository.create({
    id: post.id,
    ...postInUpdate,
  })

  await PostRepository.update(post.id, post)

  return Success("Post has been updated")
}

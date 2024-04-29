import { Exception, Success } from "@infra"
import { PostRepository } from "@models"

export default async (id: string) => {
  var post = await PostRepository.findOne({ where: { id } })

  if (post === null) {
    return Success({})
  }

  return Success(post)
}

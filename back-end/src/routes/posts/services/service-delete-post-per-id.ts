import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { PostRepository } from "@models"

export default async (id: string) => {
  const post = await PostRepository.findOne({ where: { id } })

  if (post === null || post === undefined) {
    return Exception(new BussinessError("Unabled find post per id"))
  }

  await PostRepository.delete(id)

  return Success(true)
}

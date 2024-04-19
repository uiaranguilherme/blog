import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { UserRepository } from "@models"

export default async (id: string) => {
  if (id !== undefined) {
    var user = await UserRepository.findOne({ where: { id } })

    return Success(user)
  }

  return Exception(new BussinessError("The id field is mandatory"))
}

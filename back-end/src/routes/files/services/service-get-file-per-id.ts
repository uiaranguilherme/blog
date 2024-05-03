import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { FileRepository } from "@models"

export default async (id: string) => {
  var file = await FileRepository.findOne({ where: { id } })

  if (file === null || file === undefined) {
    return Exception(new BussinessError("Unabled find for file per id"))
  }

  return Success(file)
}

import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { WorkHistoryRepository } from "@models"

export default async (id: string) => {
  const company = await WorkHistoryRepository.findOne({ where: { id } })

  if (company === undefined || company === null) {
    return Exception(new BussinessError("Unabled find company history per id"))
  }

  await WorkHistoryRepository.delete(id)

  return Success(true)
}

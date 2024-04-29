import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { CompanyHistoryRepository } from "@models"

export default async (id: string) => {
  const company = await CompanyHistoryRepository.findOne({ where: { id } })

  if (company === undefined || company === null) {
    return Exception(new BussinessError("Unabled find company history per id"))
  }

  await CompanyHistoryRepository.delete(id)

  return Success(true)
}

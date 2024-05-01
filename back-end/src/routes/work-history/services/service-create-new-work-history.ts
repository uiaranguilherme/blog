import { WorkHistoryRepository } from "@models"
import ICompanyHistory from "../interfaces/iwork-history"
import { Success } from "@infra"

export default async (company: ICompanyHistory) => {
  company = WorkHistoryRepository.create(company)

  await WorkHistoryRepository.save(company)

  return Success(true)
}

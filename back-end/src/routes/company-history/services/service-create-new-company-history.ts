import { CompanyHistoryRepository } from "@models"
import ICompanyHistory from "../interfaces/icompany-history"
import { Success } from "@infra"

export default async (company: ICompanyHistory) => {
  company = CompanyHistoryRepository.create(company)

  await CompanyHistoryRepository.save(company)

  return Success(true)
}

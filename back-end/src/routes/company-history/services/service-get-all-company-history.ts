import { Success } from "@infra"
import { CompanyHistoryRepository } from "@models"

export default async () => {
  var [items, totalItems] = await CompanyHistoryRepository.findAndCount({})
  return Success({
    quantity_items: totalItems,
    companys: items,
  })
}

import { Success } from "@infra"
import { WorkHistoryRepository } from "@models"

export default async () => {
  var [items, totalItems] = await WorkHistoryRepository.findAndCount({})
  return Success({
    quantity_items: totalItems,
    companys: items,
  })
}

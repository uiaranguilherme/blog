import { Success } from "@infra"
import { RefreshTokenRepository } from "@models"

export default async (id: string) => {
  var refresh = await RefreshTokenRepository.findOne({ where: { id: id } })

  return Success(refresh)
}

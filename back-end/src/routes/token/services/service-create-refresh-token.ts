import { Success } from "@infra"
import { RefreshTokenRepository } from "@models"
import { IRefreshToken } from "@models-interface"

export default async (refresh: IRefreshToken) => {
  if ((await RefreshTokenRepository.exists({ where: { user: refresh.user } })) === true) {
    await RefreshTokenRepository.delete({ user: refresh.user })
  }

  var date = new Date()
  var refreshModel = RefreshTokenRepository.create({
    espiresIn: new Date().setDate(date.getDate() + 1),
    user: refresh.user,
  })

  refresh = await RefreshTokenRepository.save(refreshModel)
  return Success(refresh.id)
}

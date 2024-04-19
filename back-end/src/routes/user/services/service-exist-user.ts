import { Success } from "@infra"
import { UserRepository } from "@models"

export default async (id: string) => {
  const existUser = await UserRepository.exists({ where: { id } })

  return Success(existUser)
}

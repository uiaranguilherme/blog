import { UserRepository } from "@models"
import { IReqUpdatePassword } from "../interfaces/ipassword"
import { Exception, Success } from "@infra"
import { BussinessError } from "@handler"

export default async ({ email, password }: IReqUpdatePassword) => {
  const isExistUser = await UserRepository.exists({ where: { email } })

  if (isExistUser) {
    await UserRepository.update({ email }, { password })

    return Success(true)
  }

  return Exception(new BussinessError("Unable to find user"))
}

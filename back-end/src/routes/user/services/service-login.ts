import { UserRepository } from "@models"
import { IReqLogin } from "../interfaces/isigin"
import { Exception, Success } from "@infra"
import { BussinessError } from "@handler"
import { comparePassword, sign } from "@security"
import serviceCreateRefreshToken from "src/routes/token/services/service-create-refresh-token"

export default async (auth: IReqLogin) => {
  const user = await UserRepository.findOne({ where: { email: auth.email } })

  if (user === null || user === undefined) {
    return Exception(new BussinessError("Unable to find user, review your details and try again"))
  }

  if ((await comparePassword(auth.password, user.password)) === false) {
    return Exception(new BussinessError("invalid password"))
  }

  const token = (await sign({ email: user.email, id: user.id })).value
  const refresh_token = (await serviceCreateRefreshToken({ user: user.id })).value

  return Success({
    email: user.email,
    name: `${user.firstName} ${user.lastName}`,
    token,
    refresh_token,
  })
}

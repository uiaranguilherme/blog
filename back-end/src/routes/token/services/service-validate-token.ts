import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { validate } from "@security"

export default async (token: string) => {
  var user = await validate(token)

  if (user === undefined) {
    return Exception(new BussinessError("Unable to identify token"))
  }

  if (user.isSuccess === false) {
    return Exception(new BussinessError(user.error?.message))
  }

  return Success(user.value)
}

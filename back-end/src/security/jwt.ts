import * as jwt from "jsonwebtoken"
import { ISigin } from "./interfaces/ijwt"
import { key } from "./services/key"
import { Exception, Success } from "@infra"
import { BussinessError, Unauthorized } from "@handler"

interface IErrorJwt {
  name: string
  message: string
  expiredAt: number
}

export const sign = async ({ email, id }: ISigin) => {
  const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : key
  const token = jwt.sign({ email, id }, secret, { expiresIn: "10h" })
  return Success(token)
}

export const verify = async (token: string) => {
  try {
    const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : key
    jwt.verify(token, secret)
    return Success(true)
  } catch (err) {
    var erro = err as IErrorJwt
    if (erro.name === "TokenExpiredError") {
      return Exception(new Unauthorized(erro.message))
    }
    if (erro.name === "JsonWebTokenError") {
      return Exception(new BussinessError("Check your data and try again"))
    }
  }
}

export const validate = async (token: string) => {
  try {
    const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : key
    const user = jwt.verify(token, secret) as ISigin

    return Success({
      email: user.email,
      id: user.id,
    })
  } catch (err) {
    var erro = err as IErrorJwt
    if (erro.name === "TokenExpiredError") {
      return Exception(new Unauthorized(erro.message))
    }
    if (erro.name === "JsonWebTokenError") {
      return Exception(new BussinessError("Check your data and try again"))
    }
  }
}

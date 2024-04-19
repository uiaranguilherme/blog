import { NextFunction, Request, Response } from "express"
import { SERVER_EXCEPTION, STATUS_INTERNAL_SERVER_ERROR, STATUS_UNAUTHORIZED } from "../../constants"
import { verify } from "../jwt"

export = async (req: Request, res: Response, next: NextFunction) => {
  try {
    var autorization = req.headers.authorization
    if (autorization !== undefined && autorization !== null) {
      const [, token] = autorization.split(" ")
      await verify(token.trim()).then(response => {
        if (response !== undefined) {
          if (response.isSuccess === true && response.value === true) {
            next()
          } else {
            res.status(STATUS_UNAUTHORIZED).json({
              code: STATUS_UNAUTHORIZED,
              message: "not authorized",
            })
          }
        }
      })
    } else {
      res.status(STATUS_UNAUTHORIZED).json({
        code: STATUS_UNAUTHORIZED,
        message: "not authorized",
      })
    }
  } catch (err) {
    console.log("err =>", err)
    res.status(STATUS_INTERNAL_SERVER_ERROR).json({
      code: SERVER_EXCEPTION,
      message: "server error",
    })
  }
}

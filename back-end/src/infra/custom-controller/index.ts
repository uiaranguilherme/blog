/** @format */
import { ServerError } from "@handler"
import { IResponse, CallbackIsFunction, CallbackException, CallbackController, CallbackSuccess, CallbackSend } from "../interface/icustom-controller"
import { Request as Req, Response as Res } from "express"
import { STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { IErrorCustom } from "@handler"

const Success = <V>(value: V): IResponse<V> => {
  return {
    isSuccess: true,
    value: value,
    error: undefined,
  }
}

const Exception = (error: IErrorCustom): IResponse<any> => {
  return {
    isSuccess: false,
    error: error,
    value: undefined,
  }
}

const isSuccess = <R>(obj: IResponse<R>, callback: CallbackSuccess) => {
  if (obj.isSuccess === true) {
    var value = obj.value
    return callback(value)
  }

  return null
}

const isException = (response: IResponse<any>, callback: CallbackException) => {
  const is: CallbackIsFunction = (name, callback) => {
    var error = response.error
    if (error !== undefined && name === error.name) {
      return callback(error)
    }
  }

  if (response.isSuccess === false) {
    return callback(is)
  }
}

const Controller = (callback: CallbackController) => {
  return async (req: Req, res: Res) => {
    try {
      var send = (value: IResponse<any>): any => {
        if (value.isSuccess) {
          return res.send(value.value)
        }

        if (value.isSuccess === false) {
          var error = value.error

          if (error !== undefined) {
            return res.status(error.code).send(error)
          }

          return res
            .status(STATUS_INTERNAL_SERVER_ERROR)
            .json(new ServerError("Não foi possivel realizar sua solicitação neste momento, por favor tente novamente mais tarde."))
        }
      }
      await callback(req, send)
    } catch (err) {
      console.log("Erro de execução", err)
      res
        .status(STATUS_INTERNAL_SERVER_ERROR)
        .json(new ServerError("Não foi possivel realizar sua solicitação neste momento, por favor tente novamente mais tarde."))
    }
  }
}

export { IResponse, Success, Exception, isSuccess, isException, Controller }

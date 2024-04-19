import { AsyncLocalStorage } from "async_hooks"
import IErrorCustom from "../../handler/interfaces/ierror-custom"
import { IResponse, CallbackIsFunction, CallbackException, CallbackController, CallbackSuccess, CallbackError } from "../interface/icustom-controller"
import { Response } from "../../handler/interfaces/iresponse"
import { NextFunction, Request as Req, Response as Res } from "express"
import { STATUS_INTERNAL_SERVER_ERROR } from "../../constants"
import { ServerError } from "../../handler"

const localStorage = new AsyncLocalStorage() as any

const middlewareContextRequest = (req: Req, res: Res, next: NextFunction) => {
  localStorage.run(new Map(), () => {
    next()
  })
}

const Success = <V>(value: V): IResponse<V> => {
  return {
    isSuccess: true,
    value: value,
  }
}

const Exception = (error: IErrorCustom): IResponse<any> => {
  return {
    isSuccess: false,
    error: error,
  }
}

const isSuccess = (obj: Response, callback: CallbackSuccess): void => {
  if (obj.isSuccess === true) {
    var value = obj.value
    const success = callback(value)
    localStorage.getStore().set("response", success)
  }
}

const isException = (obj: Response, callback: CallbackException): void => {
  const is: CallbackIsFunction = (nameError: string, callbackError: CallbackError) => {
    if (obj.error !== undefined) {
      if (nameError === obj.error!.name) {
        const error = callbackError(obj.error)
        localStorage.getStore().set("response", error)
        //localStorage.enterWith(error)
      }
    }
  }

  if (obj.isSuccess === false) {
    callback(is)
  }
}

const Controller = (callback: CallbackController) => {
  return async (req: Req, res: Res) => {
    try {
      let response = await callback(req)

      if (response !== undefined) {
        if (response.isSuccess) {
          res.send(response.value)
        } else {
          if (response.error !== undefined) {
            res.status(response.error?.code).send(response.error)
          }
        }
      } else {
        let storage = localStorage.getStore().get("response")
        if (storage !== undefined && storage.code !== undefined) {
          res.status(storage.code).send(storage)
        } else {
          res.json(storage)
        }
      }
    } catch (err) {
      res
        .status(STATUS_INTERNAL_SERVER_ERROR)
        .json(new ServerError("Não foi possivel realizar sua solicitação neste momento, por favor tente novamente mais tarde."))
      console.log("Erro de execussão", err)
    }
  }
}

export { Success, Exception, isSuccess, isException, Controller, middlewareContextRequest }

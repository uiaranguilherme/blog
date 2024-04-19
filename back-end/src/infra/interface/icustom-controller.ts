import { Request } from "express"
import IErrorCustom from "../../handler/interfaces/ierror-custom"
import { Response } from "../../handler/interfaces/iresponse"

export interface IResponse<V> {
  isSuccess: boolean
  value?: V
  error?: IErrorCustom
}

export interface CallbackError {
  <E>(error: E & IErrorCustom): E & IErrorCustom
}

export interface CallbackIsFunction {
  (nameError: string, callback: CallbackError): void
}

export interface CallbackException {
  (is: CallbackIsFunction): void
}

export interface CallbackSuccess {
  (value: any): any
}

export interface CallbackController {
  (req: Request): Promise<Response | void>
}

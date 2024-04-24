/** @format */

import { Request } from "express"
import IErrorCustom from "src/handler/interfaces/ierror-custom"

export interface IResponse<V> {
  isSuccess: boolean
  value: V | undefined
  error: IErrorCustom | undefined
}
export type CallbackSend = (value: IResponse<any>) => void
export type CallbackError = (error: IErrorCustom) => void
export type CallbackIsFunction = (name: string, callback: CallbackError) => IErrorCustom | void
export type CallbackException = (is: CallbackIsFunction) => void
export type CallbackSuccess = (value: any) => any
export type CallbackController = (req: Request, send: CallbackSend) => Promise<IResponse<any> | void>

/** @format */

import { BUSSINES_EXCEPTION, CONFLICT_EXCEPTION, IDENTITY_EXCEPTION, SERVER_EXCEPTION } from "../constants"
import { STATUS_BAD_REQUEST, STATUS_CONFLICT, STATUS_INTERNAL_SERVER_ERROR, STATUS_NOT_CONTENT, STATUS_OK } from "../constants"
import IErrorCustom from "./interfaces/ierror-custom"

export class ErrorCustom implements IErrorCustom {
  readonly code = STATUS_OK
  readonly name = "[GENERIC ERROR]"
  stack?: string | undefined
  message: string

  constructor(_message: any) {
    this.message = JSON.stringify(_message)
  }
}

export class BussinessError implements IErrorCustom {
  readonly code = STATUS_BAD_REQUEST
  readonly name = BUSSINES_EXCEPTION
  stack?: string | undefined
  message: string

  constructor(_message: any) {
    this.message = JSON.stringify(_message)
  }
}
export class ConflictError implements IErrorCustom {
  readonly code = STATUS_CONFLICT
  readonly name = CONFLICT_EXCEPTION
  stack?: string | undefined
  message: string

  constructor(_message: any) {
    if (typeof _message === "object" || Array.isArray(_message)) {
      this.message = JSON.stringify(_message)
    }
    this.message = _message
  }
}
export class ServerError implements IErrorCustom {
  readonly code = STATUS_INTERNAL_SERVER_ERROR
  readonly name = SERVER_EXCEPTION
  message: string
  stack?: string | undefined

  constructor(_message: any) {
    this.message = JSON.stringify(_message)
  }
}

export class IpConfirmation implements IErrorCustom {
  readonly code = STATUS_NOT_CONTENT
  readonly name = IDENTITY_EXCEPTION
  _stack: string
  message: string

  constructor(_message: any) {
    this.message = JSON.stringify(_message)
  }
}

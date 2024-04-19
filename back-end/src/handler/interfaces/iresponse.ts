import IErrorCustom from "./ierror-custom"

export interface Response {
  isSuccess: boolean
  value?: any
  error?: IErrorCustom
}

import IErrorCustom from "../../handler/interfaces/ierror-custom"
export interface IValidationProps {
  value: any
  values: IObject
  key: string
}
export interface IValidation {
  isValid: boolean
  errors: string[]
}
export interface IErrorValidation {
  Error: string | null
}
export type FunctionValidation = (props: IValidationProps) => IErrorValidation
export interface IObject {
  [index: string]: string | number | any | object
}
export interface ISchema {
  [index: string]: Array<FunctionValidation> | string | number | any | object
}

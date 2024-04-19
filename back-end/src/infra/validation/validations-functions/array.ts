import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"

export = (type?: string): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    let existValueTypeInErro = false

    if (!Array.isArray(props.value)) {
      return {
        Error: `O campo ${props.key} é do tipo array.`,
      }
    }

    if (type !== undefined) {
      for (var v in props.value) {
        if (typeof v !== type) {
          existValueTypeInErro = true
        }
      }
      if (existValueTypeInErro) {
        return {
          Error: `O campo ${props.key} é de preenchimento do tipo ${type}.`,
        }
      }
    }

    return { Error: null }
  }
}

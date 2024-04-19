import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"

export = (): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    const ipRegex = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/

    if (!ipRegex.test(props.value)) {
      return {
        Error: "IP inválido.",
      }
    }

    return {
      Error: null,
    }
  }
}

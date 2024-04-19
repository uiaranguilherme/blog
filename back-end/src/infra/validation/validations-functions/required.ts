import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"

export = (message: string): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    if (typeof props.value === "string") {
      if (props.value.length === 0) {
        return {
          Error: message,
        }
      }
    }

    if (props.value === undefined || props.value === null) {
      return {
        Error: message,
      }
    }

    return {
      Error: null,
    }
  }
}

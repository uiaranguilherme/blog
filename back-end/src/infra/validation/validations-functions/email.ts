import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"

export = (): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexEmail.test(props.value)) {
      return {
        Error: "Formato de e-mail inválido.",
      }
    }

    return {
      Error: null,
    }
  }
}

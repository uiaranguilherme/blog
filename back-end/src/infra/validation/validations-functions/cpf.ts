import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"

export = (message: string): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    if (typeof props.value !== "string") {
      return {
        Error: "O CPF precisa ser do tipo String.",
      }
    }

    var Soma
    var Resto
    Soma = 0

    if (props.value == "00000000000") return { Error: message }

    for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(props.value.substring(i - 1, i)) * (11 - i)
    Resto = (Soma * 10) % 11

    if (Resto == 10 || Resto == 11) Resto = 0
    if (Resto != parseInt(props.value.substring(9, 10))) return { Error: message }

    Soma = 0
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(props.value.substring(i - 1, i)) * (12 - i)
    Resto = (Soma * 10) % 11

    if (Resto == 10 || Resto == 11) Resto = 0
    if (Resto != parseInt(props.value.substring(10, 11))) return { Error: message }
    return { Error: null }
  }
}

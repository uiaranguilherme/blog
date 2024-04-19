import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"
import { STATES } from "../../../constants/states"

export = (): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    if (typeof props.value === "string") {
      if (props.value.length > 2) {
        return {
          Error: `O tamanho máximo do campo ${props.key} é de dois digitos.`,
        }
      }
      if (STATES.includes(props.value.toUpperCase()) === false) {
        return {
          Error: `O campo ${props.key} esta em formato inválido, o esperado é somente duas letras.`,
        }
      }
    } else {
      return {
        Error: `O campo ${props.key} é do tipo string.`,
      }
    }

    return {
      Error: null,
    }
  }
}

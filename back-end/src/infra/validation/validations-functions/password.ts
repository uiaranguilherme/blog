import { FunctionValidation, IErrorValidation, IValidationProps } from "../../interface/ivalidation"

export = (): FunctionValidation => {
  return (props: IValidationProps): IErrorValidation => {
    if (typeof props.value !== "string") {
      return {
        Error: "Password é do tipo string.",
      }
    }
    var number = /([0-9])/
    var alphabet = /([a-zA-Z])/
    var specialCharacter = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

    if (props.value.length < 6) {
      return {
        Error: "Password precisa conter mais de 6 digitos.",
      }
    }

    if (!number.test(props.value)) {
      return {
        Error: "Password precisa conter pelo menos 1 número.",
      }
    }

    if (!alphabet.test(props.value)) {
      return {
        Error: "Password precisa conter pelo menos 1 letra.",
      }
    }

    if (!specialCharacter.test(props.value)) {
      return {
        Error: "Password precisa conter pelo menos 1 caractere especial.",
      }
    }

    return {
      Error: null,
    }
  }
}

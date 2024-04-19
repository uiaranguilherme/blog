import { Schema, required } from "../../../infra/validation/handler-validation"

export = Schema({
  user: [required("O parametro user é de preenchimento obrigatório.")],
})

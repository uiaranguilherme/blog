import { Schema, required } from "../../../infra/validation/handler-validation"

export = Schema({
  profile: [required("O parametro profile é de preenchimento obrigatório.")],
  user: [required("O parametro user é de preenchimento obrigatório.")],
})

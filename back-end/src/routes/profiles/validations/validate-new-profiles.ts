import { Schema, required, string } from "../../../infra/validation/handler-validation"

export = Schema({
  user: [required("O campo user é de preenchimento obrigatório."), string("O campo user é do tipo string.")],
  profile: [required("O campo profile é de preenchimento obrigatório."), string("O campo profile é do tipo string.")],
})

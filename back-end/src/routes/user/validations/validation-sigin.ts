import { Schema, required, string, array } from "@validation"

export = Schema({
  email: [required("the field email is required"), string("the field email is of type string")],
  password: [required("the field password is required"), string("the field password is of type string")],
})

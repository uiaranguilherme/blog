import { Schema, required, string } from "@validation"

export = Schema({
  token: [required("the field refresh_token is required"), string("the field refresh_token is of type string")],
})

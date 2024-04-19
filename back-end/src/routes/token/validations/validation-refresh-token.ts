import { Schema, required, string } from "@validation"

export = Schema({
  refresh_token: [required("the field refresh_token is required"), string("the field refresh_token is of type string")],
})

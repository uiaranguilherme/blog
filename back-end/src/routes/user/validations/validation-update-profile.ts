import { Schema, required, string, array } from "@validation"

export = Schema({
  email: [required("the field email is required"), string("the field email is of type string")],
  profile: [required("the field profile is required"), array("string")],
})

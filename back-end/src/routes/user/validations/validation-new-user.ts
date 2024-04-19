import { Schema, required, string, array } from "@validation"

export = Schema({
  firstName: [required("the field firstName is required"), string("the field firstName is of type string")],
  lastName: [required("the field lastName is required"), string("the field lastName is of type string")],
  email: [required("the field email is required"), string("the field email is of type string")],
  password: [required("the field password is required"), string("the field password is of type string")],
})

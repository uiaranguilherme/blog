import { Schema, string, required } from "@validation"

export default Schema({
  name: [string("name is typeof string"), required("name is require")],
  history: [string("history is typeof string"), required("history is require")],
  birth: [required("birth is require")],
  hometown: [string("hometown is typeof string"), required("hometown is require")],
})

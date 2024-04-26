import { Schema, string, required } from "@validation"

export default Schema({
  name: [string("name is typeof string"), required("name is require")],
  description: [string("description is typeof string"), required("description is require")],
  type: [string("type is typeof string"), required("type is require")],
  stacks: [required("stacks is require")],
  git: [string("git is typeof string"), required("git is require")],
  url: [string("url is typeof string"), required("url is require")],
})

import { Schema, string, required } from "@validation"

export default Schema({
  name: [string("name is typeof string"), required("name is require")],
  img: [string("img is typeof string"), required("img is require")],
  description: [string("description is typeof string"), required("description is require")],
  tags: [required("tags is require")],
  content: [string("content is typeof string"), required("content is require")],
})

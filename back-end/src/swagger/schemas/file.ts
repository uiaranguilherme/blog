import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    destination: {
      type: "string",
    },
    encoding: {
      type: "string",
    },
    fieldname: {
      type: "string",
    },
    filename: {
      type: "string",
    },
    mimetype: {
      type: "string",
    },
    originalname: {
      type: "string",
    },
    path: {
      type: "string",
    },
    size: {
      type: "string",
    },
  },
})

import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    File: {
      type: "string",
      format: "binary",
    },
  },
})

import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    code: {
      type: "string",
      example: "xxx",
    },
    message: {
      type: "string",
      example: "message",
    },
  },
})

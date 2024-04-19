import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    token: {
      type: "string",
      example: "TOKEN",
    },
  },
})

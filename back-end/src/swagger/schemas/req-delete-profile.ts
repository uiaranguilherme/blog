import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    profile: {
      type: "string",
      example: "xxx",
    },
    user: {
      type: "string",
      example: "user",
    },
  },
})

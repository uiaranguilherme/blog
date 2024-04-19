import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    email: {
      type: "string",
      example: "email@email.com",
    },
    name: {
      type: "string",
      example: "Complete name",
    },
    token: {
      type: "string",
      example: "TOKEN_ACCESS",
    },
  },
})

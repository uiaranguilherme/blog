import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    email: {
      type: "string",
      example: "email@email.com",
    },
    password: {
      type: "string",
      example: "***********",
    },
  },
})

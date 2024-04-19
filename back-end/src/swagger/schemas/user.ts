import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    firstName: {
      type: "string",
      example: "Primary Name",
    },
    lastName: {
      type: "string",
      example: "Secundy Name",
    },
    email: {
      type: "string",
      example: "email@email.com",
    },
    password: {
      type: "string",
      example: "00000000000",
    },
  },
})

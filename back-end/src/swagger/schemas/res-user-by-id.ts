import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    firstName: {
      type: "string",
      example: "Primary name",
    },
    lastName: {
      type: "string",
      example: "Secondy name",
    },
    email: {
      type: "string",
      example: "email@email.com",
    },
    profile: {
      type: "array",
      example: "['PROFILE']",
    },
  },
})

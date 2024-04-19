import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    user: {
      type: "string",
      example: "user id",
    },
    profile: {
      type: "string",
      example: "PROFILE_NAME",
    },
  },
})

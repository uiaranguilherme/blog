import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    email: {
      type: "string",
      example: "user email",
    },
    profiles: {
      type: "array",
      items: {
        type: "object",
        properties: {
          profile: {
            type: "string",
            example: "profile",
          },
        },
      },
    },
  },
})

import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    refresh_token: {
      type: "string",
    },
  },
})

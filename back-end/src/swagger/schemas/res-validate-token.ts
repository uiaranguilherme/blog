import { CreateSchema } from "@swagger"

export = CreateSchema({
  type: "object",
  properties: {
    email: {
      type: "string",
    },
    id: {
      type: "string",
    },
  },
})

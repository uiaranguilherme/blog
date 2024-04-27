import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "string",
    },
    img: {
      type: "string",
      example: "string",
    },
    description: {
      type: "string",
      example: "string",
    },
    tags: {
      type: "array",
      example: [],
    },
    content: {
      type: "string",
      example: "string",
    },
  },
})

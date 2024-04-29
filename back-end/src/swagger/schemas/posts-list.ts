import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    page: {
      type: "number",
      example: 1,
    },
    quantity_items: {
      type: "number",
      example: 1000,
    },
    posts: {
      type: "array",
      example: [],
    },
  },
})

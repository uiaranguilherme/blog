import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Users Tasks",
    },
    description: {
      type: "string",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nunc vel libero volutpat, nec sodales magna dapibus. Nunc suscipit ultricies semper.",
    },
    type: {
      type: "string",
      example: "front-end",
    },
    stacks: {
      type: "array",
      example: ["Node-JS", "Next-JS"],
    },
    git: {
      type: "string",
      example: "https://",
    },
    url: {
      type: "string",
      example: "https://",
    },
  },
})

import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Uiaran",
    },
    history: {
      type: "string",
      example:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nunc vel libero volutpat, nec sodales magna dapibus. Nunc suscipit ultricies semper.",
    },
    birth: {
      type: "string",
      example: "Uiaran",
    },
    hometown: {
      type: "string",
      example: "Itajai-SC",
    },
    img: {
      type: "string",
      example: "",
    },
  },
})

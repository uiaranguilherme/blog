import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    quantity_items: {
      type: "number",
      example: 1000,
    },
    companys: {
      type: "array",
      example: [
        {
          company: "string",
          office: "string",
          office_description: "string",
          when_arrived: "Date",
          when_came_out: "Date",
        },
      ],
    },
  },
})

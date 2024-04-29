import { CreateSchema } from "@swagger"

export default CreateSchema({
  type: "object",
  properties: {
    company: {
      type: "string",
    },
    office: {
      type: "string",
    },
    office_description: {
      type: "string",
    },
    when_arrived: {
      type: "string",
    },
    when_came_out: {
      type: "string",
    },
  },
})

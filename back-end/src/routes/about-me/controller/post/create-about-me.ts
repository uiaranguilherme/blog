import { Controller } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaReqCreateAboutMe } from "@swagger-components"

CreateRouteDocumentation({
  tags: ["About-me"],
  type: "post",
  path: "/about-me/create-about-me",
  description: "Create about-me infos",
  body: {
    content: {
      "application/json": {
        description: "About-me info",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaReqCreateAboutMe",
        },
      },
    },
  },
  responses: [],
  definitions: {
    SchemaReqCreateAboutMe,
  },
})

export default Controller(async (req, send) => {})

import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaPost } from "@swagger-components"

CreateRouteDocumentation({
  type: "post",
  path: "/post/create/new-post",
  tags: ["Posts"],
  description: "Create new post",
  body: {
    content: {
      "application/json": {
        description: "Post",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaPost",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success in created new post",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in craete about-me",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaError",
          },
        },
      },
    },
    [STATUS_INTERNAL_SERVER_ERROR]: {
      description: "error in server",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaError",
          },
        },
      },
    },
  },
  definitions: {
    SchemaError,
    SchemaPost,
  },
})
export default Controller(async () => {})

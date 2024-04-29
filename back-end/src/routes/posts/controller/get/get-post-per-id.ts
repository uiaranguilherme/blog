import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaPost } from "@swagger-components"
import serviceGetPostPerId from "../../services/service-get-post-per-id"

CreateRouteDocumentation({
  type: "get",
  path: "/posts/:id",
  tags: ["Posts"],
  description: "Get post per id",
  parameters: [
    {
      in: "path",
      required: true,
      name: "id",
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "Success in get post",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaPost",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in listing the posts",
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
export default Controller(async (req, send) => {
  var id = req.params.id

  if (id === null || id === undefined) {
    return send(Exception(new BussinessError("Unabled find id in params")))
  }

  var post = await serviceGetPostPerId(id)

  return send(post)
})

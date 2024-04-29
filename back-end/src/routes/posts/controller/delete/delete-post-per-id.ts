import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError } from "@swagger-components"
import serviceDeletePostPerId from "../../services/service-delete-post-per-id"

CreateRouteDocumentation({
  type: "delete",
  path: "/posts/:id",
  tags: ["Posts"],
  description: "Delete post",
  parameters: [
    {
      in: "path",
      required: true,
      name: "id",
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "Success in delete post",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in delete post",
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
  },
})
export default Controller(async (req, send) => {
  const id = req.params.id as string

  if (id === undefined || id === null) {
    return send(Exception(new BussinessError("Unabled id for delete post")))
  }

  var isDeletedPost = await serviceDeletePostPerId(id)

  return send(isDeletedPost)
})

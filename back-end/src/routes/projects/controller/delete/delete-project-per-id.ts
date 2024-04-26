import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError } from "@swagger-components"
import serviceDeleteProjectPerId from "../../services/service-delete-project-per-id"

CreateRouteDocumentation({
  type: "delete",
  path: "/projects/delete/:id",
  tags: ["Projects"],
  description: "Delete project per id",
  responses: {
    [STATUS_OK]: {
      description: "Success in delete project",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in delete project",
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
  const id = req.params.id

  if (id === null || id === undefined) {
    return send(Exception(new BussinessError("Unabled id parameter")))
  }

  const isDeletedProject = await serviceDeleteProjectPerId(id)

  return send(isDeletedProject)
})

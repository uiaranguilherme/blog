import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError } from "@swagger-components"
import serviceDeleteWorkHistoryPerId from "../../services/service-delete-work-history-per-id"

CreateRouteDocumentation({
  type: "delete",
  path: "/work-history/{id}",
  tags: ["Work History"],
  description: "Delete work history per id",
  parameters: [
    {
      in: "path",
      name: "id",
      required: true,
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "Success in delete work history",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in delete work history",
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
    return send(Exception(new BussinessError("Unabled parameter id in params")))
  }

  var isDeletedWorkHistoryPerid = await serviceDeleteWorkHistoryPerId(id)

  return send(isDeletedWorkHistoryPerid)
})

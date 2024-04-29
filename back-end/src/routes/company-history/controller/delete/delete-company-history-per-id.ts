import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError } from "@swagger-components"
import serviceDeleteCompanyHistoryPerId from "../../services/service-delete-company-history-per-id"

CreateRouteDocumentation({
  type: "delete",
  path: "/company-history/:id",
  tags: ["Company History"],
  description: "Delete company history per id",
  responses: {
    [STATUS_OK]: {
      description: "Success in delete company history",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in delete company history",
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

  var isDeletedCompanyHistoryPerid = await serviceDeleteCompanyHistoryPerId(id)

  return send(isDeletedCompanyHistoryPerid)
})

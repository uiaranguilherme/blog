import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaWorkHistoryList, SchemaError } from "@swagger-components"
import serviceGetAllWorkHistory from "../../services/service-get-all-work-history"

CreateRouteDocumentation({
  type: "get",
  path: "/work-history",
  tags: ["Work History"],
  description: "Get all work history",
  responses: {
    [STATUS_OK]: {
      description: "Success in listing the work history",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaWorkHistoryList",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in listing the work history",
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
    SchemaWorkHistoryList,
    SchemaError,
  },
})
export default Controller(async (req, send) => {
  const workHistorys = await serviceGetAllWorkHistory()

  return send(workHistorys)
})

import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaCompanyHistoryList, SchemaError } from "@swagger-components"
import serviceGetAllCompanyHistory from "../../services/service-get-all-company-history"

CreateRouteDocumentation({
  type: "get",
  path: "/company-history",
  tags: ["Company History"],
  description: "Get all company history",
  responses: {
    [STATUS_OK]: {
      description: "Success in listing the company history",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaCompanyHistoryList",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in listing the company history",
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
    SchemaCompanyHistoryList,
    SchemaError,
  },
})
export default Controller(async (req, send) => {
  const companyHistorys = await serviceGetAllCompanyHistory()

  return send(companyHistorys)
})

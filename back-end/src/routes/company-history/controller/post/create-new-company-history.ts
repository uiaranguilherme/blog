import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaCompanyHistory, SchemaError } from "@swagger-components"
import ICompanyHistory from "../../interfaces/icompany-history"
import validationCreateCompanyHistory from "../../validations/validation-create-company-history"
import { BussinessError } from "@handler"
import serviceCreateNewCompanyHistory from "../../services/service-create-new-company-history"

CreateRouteDocumentation({
  type: "post",
  path: "/company-history",
  tags: ["Company History"],
  description: "Create new company history",
  body: {
    content: {
      "application/json": {
        description: "Post",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaCompanyHistory",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success in created new company history",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in craete company history",
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
    SchemaCompanyHistory,
  },
})
export default Controller(async (req, send) => {
  const body = req.body as ICompanyHistory

  const { errors, isValid } = validationCreateCompanyHistory.validation(body)

  if (isValid) {
    var isCreatedCompanyHistory = await serviceCreateNewCompanyHistory(body)

    return send(isCreatedCompanyHistory)
  }

  return send(Exception(new BussinessError(errors)))
})

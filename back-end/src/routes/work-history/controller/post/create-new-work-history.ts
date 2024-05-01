import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaWorkHistory, SchemaError } from "@swagger-components"
import IWorkHistory from "../../interfaces/iwork-history"
import validationCreateWorkHistory from "../../validations/validation-create-work-history"
import { BussinessError } from "@handler"
import serviceCreateNewWorkHistory from "../../services/service-create-new-work-history"

CreateRouteDocumentation({
  type: "post",
  path: "/work-history",
  tags: ["Work History"],
  description: "Create new work history",
  body: {
    content: {
      "application/json": {
        description: "Post",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaWorkHistory",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success in created new work history",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in craete work history",
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
    SchemaWorkHistory,
  },
})
export default Controller(async (req, send) => {
  const body = req.body as IWorkHistory

  const { errors, isValid } = validationCreateWorkHistory.validation(body)

  if (isValid) {
    var isCreatedWorkHistory = await serviceCreateNewWorkHistory(body)

    return send(isCreatedWorkHistory)
  }

  return send(Exception(new BussinessError(errors)))
})

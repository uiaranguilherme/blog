import { STATUS_OK, STATUS_CONFLICT, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller, Exception, isSuccess } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaReqValidateToken, SchemaResValidateToken } from "@swagger-components"
import validationValidateToken from "../../validations/validation-validate-token"
import { BussinessError } from "@handler"
import serviceValidateToken from "../../services/service-validate-token"

CreateRouteDocumentation({
  path: "/security/validate-token",
  type: "post",
  tags: ["Security"],
  description: "Validate token",
  body: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/SchemaReqValidateToken",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Sucess for validate token.",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaResValidateToken",
          },
        },
      },
    },
    [STATUS_CONFLICT]: {
      description: "Conflict erro",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/SchemaError" },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "Business erro",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/SchemaError" },
        },
      },
    },
    [STATUS_INTERNAL_SERVER_ERROR]: {
      description: "Server error",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/SchemaError" },
        },
      },
    },
  },
  definitions: {
    SchemaError,
    SchemaReqValidateToken,
    SchemaResValidateToken,
  },
})

export default Controller(async req => {
  var token: string = req.body.token

  const { errors, isValid } = validationValidateToken.validation({ token })

  if (isValid) {
    var user = await serviceValidateToken(token)

    isSuccess(user, value => value)
  } else {
    return Exception(new BussinessError(errors))
  }
})

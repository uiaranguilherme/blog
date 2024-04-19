import { BussinessError, ConflictError } from "@handler"
import { Controller, Exception, Success } from "@infra"

import CreateRouteDocumentation from "@swagger"
import { STATUS_BAD_REQUEST, STATUS_CONFLICT, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { SchemaError, SchemaReqTicketCreate } from "@swagger-components"
import IReqRefreshToken from "../../interface/ireq-refresh-token"
import validationRefreshToken from "../../validations/validation-refresh-token"
import serviceGetRefreshTokenPerId from "../../services/service-get-refresh-token-per-id"
import serviceGetUserPerId from "src/routes/user/services/service-get-user-per-id"
import { sign } from "@security"

CreateRouteDocumentation({
  path: "/security/refresh-token",
  type: "post",
  tags: ["Security"],
  description: "Create ticket",
  body: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/SchemaReqTicketCreate",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Sucess for create token.",
      content: {
        "application/json": {
          schema: {
            type: "string",
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
    SchemaReqTicketCreate,
  },
})

export = Controller(async req => {
  const { refresh_token }: IReqRefreshToken = req.body

  const { errors, isValid } = validationRefreshToken.validation({ refresh_token })

  if (isValid) {
    var refresh = (await serviceGetRefreshTokenPerId(refresh_token)).value

    if (refresh !== null && refresh !== undefined) {
      var user = await serviceGetUserPerId(refresh.user)

      if (user.isSuccess === false) {
        return Exception(new ConflictError("Unable to identify user, check your details and try again"))
      }

      return Success({
        token: (await sign({ email: user.value.email, id: user.value.id })).value,
      })
    }

    return Exception(new BussinessError("Unable to obtain ticket"))
  } else {
    return Exception(new BussinessError(errors))
  }
})

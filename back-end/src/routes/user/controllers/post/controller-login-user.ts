import { BussinessError } from "@handler"
import { BUSSINES_EXCEPTION, CONFLICT_EXCEPTION, IDENTITY_EXCEPTION, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, Exception, isSuccess, isException } from "@infra"
import { SchemaError, SchemaAuthSuccess, SchemaAuthUser } from "@swagger-components"
import CreateRouteDocumentation from "@swagger"
import { IReqLogin, IResLogin } from "../../interfaces/isigin"
import { validationLogin } from "../../validations"
import serviceLogin from "../../services/service-login"

CreateRouteDocumentation({
  path: "/user/login",
  type: "post",
  tags: ["User"],
  description: "Authenticate user",
  body: {
    content: {
      "application/json": {
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaAuthUser",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success authenticating User",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/SchemaAuthSuccess" },
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
    SchemaAuthSuccess,
    SchemaAuthUser,
  },
})

export = Controller(async req => {
  const user: IReqLogin = req.body

  const { isValid, errors } = validationLogin.validation(user)

  if (isValid) {
    const response = await serviceLogin(user)

    isException(response, is => {
      is(BUSSINES_EXCEPTION, err => err)
      is(CONFLICT_EXCEPTION, err => err)
    })

    isSuccess(response, (value: IResLogin) => {
      return value
    })
  } else {
    return Exception(new BussinessError(errors))
  }
})

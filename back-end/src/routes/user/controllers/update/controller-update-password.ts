import { Controller, Exception, isException, isSuccess } from "@infra"
import { BUSSINES_EXCEPTION, SERVER_EXCEPTION, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK, STATUS_UNAUTHORIZED } from "@constants"
import { BussinessError } from "@handler"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaUpdatePassword } from "@swagger-components"
import { validationUpdatePassword } from "../../validations"
import { IReqUpdatePassword } from "../../interfaces/ipassword"
import serviceUpdatePassword from "../../services/service-update-password"

CreateRouteDocumentation({
  path: "/user/update/password",
  type: "put",
  tags: ["User"],
  description: "Change Password",
  body: {
    content: {
      "application/json": {
        description: "Informations for change password",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaUpdatePassword",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success in changing password",
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
    [STATUS_UNAUTHORIZED]: {
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
    SchemaUpdatePassword,
  },
})

export = Controller(async req => {
  const updatePassword: IReqUpdatePassword = req.body

  const { isValid, errors } = validationUpdatePassword.validation(updatePassword)
  if (isValid) {
    const response = await serviceUpdatePassword(updatePassword)

    isSuccess(response, authUser => {
      return authUser
    })

    isException(response, is => {
      is(BUSSINES_EXCEPTION, err => {
        return err
      })

      is(SERVER_EXCEPTION, err => {
        return err
      })
    })
  } else {
    return Exception(new BussinessError(errors))
  }
})

import { BUSSINES_EXCEPTION, SERVER_EXCEPTION, STATUS_BAD_REQUEST, STATUS_CONFLICT, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, Exception, isException, isSuccess } from "@infra"
import { SchemaError, SchemaUser } from "@swagger-components"
import CreateRouteDocumentation from "@swagger"
import { BussinessError } from "@handler"
import { IUser } from "src/db/models/interfaces"
import { validationNewUser } from "../../validations"
import { serviceNewUser } from "../../services"

CreateRouteDocumentation({
  path: "/user",
  type: "post",
  description: "Insert new user",
  tags: ["User"],
  body: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/SchemaUser",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success inserting user",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaUser",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "Business erro",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaError",
          },
        },
      },
    },
    [STATUS_CONFLICT]: {
      description: "Conflict error",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaError",
          },
        },
      },
    },
    [STATUS_INTERNAL_SERVER_ERROR]: {
      description: "Server error",
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
    SchemaUser,
    SchemaError,
  },
})

export = Controller(async req => {
  const user: IUser = req.body

  const { isValid, errors } = validationNewUser.validation(user)

  if (isValid) {
    const response = await serviceNewUser(user)

    isException(response, is => {
      is(SERVER_EXCEPTION, err => err)
      is(BUSSINES_EXCEPTION, err => err)
    })

    isSuccess(response, createUser => {
      return createUser
    })
  } else {
    return Exception(new BussinessError(errors))
  }
})

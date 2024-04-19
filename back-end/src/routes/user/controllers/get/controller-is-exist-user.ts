import { BUSSINES_EXCEPTION, CONFLICT_EXCEPTION, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, isSuccess, isException, Exception } from "@infra"
import { SchemaError } from "@swagger-components"
import CreateRouteDocumentation from "@swagger"
import { IResLogin } from "../../interfaces/isigin"
import serviceExistUser from "../../services/service-exist-user"
import { BussinessError } from "@handler"

CreateRouteDocumentation({
  path: "/user/is-exist",
  type: "get",
  tags: ["User"],
  description: "Authenticate user",
  parameters: [
    {
      in: "query",
      name: "user",
      required: true,
      description: "External id",
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "User is exist",
      content: {
        "application/json": {
          schema: {
            type: "boolean",
          },
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
  },
})

export = Controller(async req => {
  const user = req.query.user

  if (typeof user === "string") {
    const response = await serviceExistUser(user)

    isException(response, is => {
      is(BUSSINES_EXCEPTION, err => err)
      is(CONFLICT_EXCEPTION, err => err)
    })

    isSuccess(response, (value: IResLogin) => {
      return value
    })
  } else {
    return Exception(new BussinessError("Unabled identity user"))
  }
})

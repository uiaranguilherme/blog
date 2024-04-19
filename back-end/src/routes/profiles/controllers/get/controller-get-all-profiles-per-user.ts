import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, CONFLICT_EXCEPTION, STATUS_UNAUTHORIZED } from "@constants"
import { Controller, Exception, isException, isSuccess } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaResAllProfilesPerUser } from "@swagger-components"
import validationGetAllProfilesPerUser from "../../validations/validation-get-all-profiles-per-user"
import { BussinessError } from "@handler"
import serviceGetAllProfilesPerUser from "../../services/service-get-all-profiles-per-user"

CreateRouteDocumentation({
  path: "/profiles/{user}",
  type: "get",
  tags: ["Profiles"],
  description: "Create new profile",
  produces: ["application/json"],
  consumes: ["application/json"],
  parameters: [
    {
      in: "path",
      name: "user",
      required: true,
      description: "Parameters for get all profiles",
      schema: {
        type: "string",
      },
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "Sucess for get all profiles.",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaResAllProfilesPerUser",
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
    SchemaResAllProfilesPerUser,
  },
})

export default Controller(async req => {
  var user = req.params.user

  var { isValid, errors } = validationGetAllProfilesPerUser.validation({ user })

  if (isValid) {
    var response = await serviceGetAllProfilesPerUser(user)

    isException(response, is => {
      is(CONFLICT_EXCEPTION, err => err)
    })
    isSuccess(response, profiles => profiles)
  } else {
    return Exception(new BussinessError(errors))
  }
})

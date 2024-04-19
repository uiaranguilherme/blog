import { BUSSINES_EXCEPTION, STATUS_BAD_REQUEST, STATUS_CONFLICT, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK, STATUS_UNAUTHORIZED } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception, isException, isSuccess } from "@infra"
import validationDeleteProfile from "../../validations/validation-delete-profile"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaReqDeleteProfile } from "@swagger-components"
import { IProfile } from "@models-interface"
import serviceDeleteProfile from "../../services/service-delete-profile"

CreateRouteDocumentation({
  path: "/profiles/delete-profile",
  type: "delete",
  tags: ["Profiles"],
  description: "Delete profile",
  body: {
    content: {
      "application/json": {
        type: "object",
        description: "Parameters for delete profile",
        schema: { $ref: "#/components/schemas/SchemaReqDeleteProfile" },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Sucess for delete profiles.",
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
    SchemaReqDeleteProfile,
  },
})

export = Controller(async req => {
  const profile: IProfile = req.body

  const { isValid, errors } = validationDeleteProfile.validation(profile)

  if (isValid) {
    const response = await serviceDeleteProfile(profile)

    isException(response, is => {
      is(BUSSINES_EXCEPTION, err => err)
    })

    isSuccess(response, isSuccesDeleteProfile => isSuccesDeleteProfile)
  } else {
    return Exception(new BussinessError(errors))
  }
})

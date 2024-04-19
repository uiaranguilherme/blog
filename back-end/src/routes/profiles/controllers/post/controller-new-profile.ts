import { Controller, Exception, isException, isSuccess } from "@infra"
import validationNewProfiles from "../../validations/validate-new-profiles"
import { BussinessError } from "@handler"
import { BUSSINES_EXCEPTION, CONFLICT_EXCEPTION, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaNewProfile } from "@swagger-components"
import serviceNewProfile from "../../services/service-new-profile"
import { IProfile } from "@models-interface"

CreateRouteDocumentation({
  path: "/profiles",
  type: "post",
  tags: ["Profiles"],
  description: "Create new profile",
  body: {
    content: {
      "application/json": {
        description: "Parameters for create new Profile",
        type: "object",
        schema: { $ref: "#/components/schemas/SchemaNewProfile" },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Sucess for create profile.",
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
    SchemaNewProfile,
  },
})

export = Controller(async req => {
  const request: IProfile = req.body

  const { isValid, errors } = validationNewProfiles.validation(request)

  if (isValid) {
    const response = await serviceNewProfile(request)

    isException(response, is => {
      is(BUSSINES_EXCEPTION, err => err)
      is(CONFLICT_EXCEPTION, err => err)
    })

    isSuccess(response, createdProfile => createdProfile)
  } else {
    return Exception(new BussinessError(errors))
  }
})

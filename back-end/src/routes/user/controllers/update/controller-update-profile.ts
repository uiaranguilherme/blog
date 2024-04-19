import { BussinessError } from "../../../../handler/handle-erros"
import { Controller, Exception, isException, isSuccess } from "../../../../infra/custom-controller"
import { BUSSINES_EXCEPTION, CONFLICT_EXCEPTION, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK, STATUS_UNAUTHORIZED } from "@constants"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaUpdateProfile } from "@swagger-components"
import { IReqUpdateProfile } from "../../interfaces/iprofile"
import { validationUpdateProfile } from "../../validations"
import serviceUpdateProfile from "../../services/service-update-profile"

CreateRouteDocumentation({
  path: "/user/update/profile",
  type: "put",
  tags: ["User"],
  description: "Change profiles",
  body: {
    content: {
      "application/json": {
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaUpdateProfile",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success when changing profile",
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
    SchemaUpdateProfile,
  },
})

export = Controller(async req => {
  const newProfiles: IReqUpdateProfile = req.body
  const { isValid, errors } = validationUpdateProfile.validation(newProfiles)

  if (isValid) {
    const response = await serviceUpdateProfile(newProfiles)

    isException(response, is => {
      is(BUSSINES_EXCEPTION, err => err)
      is(CONFLICT_EXCEPTION, err => err)
    })

    isSuccess(response, isUpdateProfile => {
      return isUpdateProfile
    })
  } else {
    return Exception(new BussinessError(errors))
  }
})

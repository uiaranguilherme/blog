import { Controller, Exception, Success } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaAboutMe } from "@swagger-components"
import { IReqCreateAboutMe } from "../../interfaces/icreate-about-me"
import validateCreateAboutMe from "../../validation/validation-create-about-me"
import { BussinessError } from "@handler"
import serviceCreateAboutMe from "../../services/service-create-about-me"
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"

CreateRouteDocumentation({
  tags: ["About-me"],
  type: "post",
  path: "/about-me/create-about-me",
  description: "Create about-me infos",
  body: {
    content: {
      "application/json": {
        description: "About-me info",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaAboutMe",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "success in create about-me",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in craete about-me",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaError",
          },
        },
      },
    },
    [STATUS_INTERNAL_SERVER_ERROR]: {
      description: "error in server",
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
    SchemaError,
    SchemaAboutMe,
  },
})

export default Controller(async (req, send) => {
  var body = req.body as IReqCreateAboutMe

  var { isValid, errors } = validateCreateAboutMe.validation(body)

  if (isValid) {
    var isCreateAboutMe = await serviceCreateAboutMe(body)

    if (isCreateAboutMe.isSuccess) {
      return send(Success(isCreateAboutMe.value))
    } else {
      return send(Exception(new BussinessError(isCreateAboutMe.error)))
    }
  }

  return send(Exception(new BussinessError(errors)))
})

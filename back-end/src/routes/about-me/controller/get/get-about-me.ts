import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller, Exception, Success } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaAboutMe } from "@swagger-components"
import serviceGetAboutMe from "../../services/service-get-about-me"
import { BussinessError } from "@handler"

CreateRouteDocumentation({
  tags: ["About-me"],
  type: "get",
  path: "/about-me",
  description: "Get about-me info",
  responses: {
    [STATUS_OK]: {
      description: "success in get about-me",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaAboutMe",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in get about-me",
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
  var aboutMe = await serviceGetAboutMe()

  if (aboutMe.isSuccess) {
    return send(Success(aboutMe.value))
  }

  return send(Exception(new BussinessError(aboutMe.error)))
})

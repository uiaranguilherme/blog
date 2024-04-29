import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, Exception, Success } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaPost } from "@swagger-components"
import IPost from "../../interfaces/ipost"
import validationCreateNewPost from "../../validation/validation-create-new-post"
import { BussinessError } from "@handler"
import serviceCreateNewPost from "../../services/service-create-new-post"

CreateRouteDocumentation({
  type: "post",
  path: "/posts/create/new-post",
  tags: ["Posts"],
  description: "Create new post",
  body: {
    content: {
      "application/json": {
        description: "Post",
        type: "object",
        schema: {
          $ref: "#/components/schemas/SchemaPost",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success in created post",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in craete post",
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
    SchemaPost,
  },
})
export default Controller(async (req, send) => {
  var body = req.body as IPost

  var { errors, isValid } = validationCreateNewPost.validation(body)

  if (isValid) {
    var isCreatedPost = await serviceCreateNewPost(body)

    if (isCreatedPost.isSuccess) {
      return send(Success(isCreatedPost.value))
    } else {
      return send(Exception(new BussinessError(isCreatedPost.error)))
    }
  }

  return send(Exception(new BussinessError(errors)))
})

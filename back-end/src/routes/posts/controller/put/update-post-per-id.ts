import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaPost } from "@swagger-components"
import IPost from "../../interfaces/ipost"
import validationCreateNewPost from "../../validation/validation-create-new-post"
import { BussinessError } from "@handler"
import serviceUpdatePostPerId from "../../services/service-update-post-per-id"

CreateRouteDocumentation({
  type: "put",
  path: "/posts/:id",
  tags: ["Posts"],
  description: "Update post",
  parameters: [
    {
      in: "path",
      required: true,
      name: "id",
    },
  ],
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
      description: "Success in update post",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in update post",
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
  var id = req.params.id as string
  var post = req.body as IPost

  var { errors, isValid } = validationCreateNewPost.validation(post)

  if (isValid) {
    var isUpdatedPost = await serviceUpdatePostPerId(id, post)

    return send(isUpdatedPost)
  }

  return send(Exception(new BussinessError(errors)))
})

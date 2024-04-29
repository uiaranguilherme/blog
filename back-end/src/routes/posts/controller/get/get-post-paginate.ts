import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, Exception, Success } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaPostsList } from "@swagger-components"
import IParamsPaginatePosts from "../../interfaces/iget-params-post-paginate"
import { BussinessError } from "@handler"
import serviceGetPaginatePosts from "../../services/service-get-paginate-posts"

CreateRouteDocumentation({
  type: "get",
  path: "/posts/paginate",
  tags: ["Posts"],
  description: "Get all posts per page",
  parameters: [
    {
      in: "query",
      name: "page",
      type: "string",
      required: true,
    },
    {
      in: "query",
      name: "amount",
      type: "string",
      required: true,
    },
    {
      in: "query",
      name: "type",
      type: "string",
      required: false,
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "Success in listing the posts",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaPostsList",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in listing the posts",
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
    SchemaPostsList,
    SchemaError,
  },
})
export default Controller(async (req, send) => {
  if (typeof req.query.amount === "number" && typeof req.query.page === "number") {
    const params = {
      amount: req.query.amount,
      page: req.query.page,
    } as IParamsPaginatePosts

    const posts = await serviceGetPaginatePosts(params)

    if (posts.isSuccess) {
      return send(Success(posts.value))
    } else {
      return send(Exception(new BussinessError(posts.error)))
    }
  } else {
    return send(Exception(new BussinessError("Verify query params and try again")))
  }
})

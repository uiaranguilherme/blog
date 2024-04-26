import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, Exception, Success } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaProjectList } from "@swagger-components"
import IParamsPaginateProjects from "../../interfaces/iget-projects-paginate"
import { BussinessError } from "@handler"
import serviceGetPaginateProjects from "../../services/service-get-paginate-projects"

CreateRouteDocumentation({
  type: "get",
  path: "/projects/paginate",
  tags: ["Projects"],
  description: "Get all projects per page",
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
      description: "Success in listing the projects",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaProjectList",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in listing the projects",
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
    SchemaProjectList,
    SchemaError,
  },
})

export default Controller(async (req, send) => {
  if (typeof req.query.amount === "number" && typeof req.query.page === "number" && typeof req.query.type === "string") {
    const params = {
      amount: req.query.amount,
      page: req.query.page,
      type: req.query.type,
    } as IParamsPaginateProjects

    const projects = await serviceGetPaginateProjects(params)

    if (projects.isSuccess) {
      return send(Success(projects.value))
    } else {
      return send(Exception(new BussinessError(projects.error)))
    }
  } else {
    return send(Exception(new BussinessError("Verify query params and try again")))
  }
})

import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { Controller, Exception, Success } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaProject } from "@swagger-components"
import { IProject } from "../../interfaces/iproject"
import validationCreateProject from "../../validation/validation-create-project"
import { BussinessError } from "@handler"
import serviceCreateNewProject from "../../services/service-create-new-project"

CreateRouteDocumentation({
  type: "post",
  tags: ["Projects"],
  path: "/projects/create/project",
  description: "This router is create new projects in portifolio",
  body: {
    content: {
      "application/json": {
        description: "Infos the project",
        schema: {
          $ref: "#/components/schemas/SchemaProject",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "success in create project",
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in create project",
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
    SchemaProject,
    SchemaError,
  },
})
export default Controller(async (req, send) => {
  const body = req.body as IProject

  const { errors, isValid } = validationCreateProject.validation(body)

  if (isValid) {
    var iscreatedProject = await serviceCreateNewProject(body)

    if (iscreatedProject.isSuccess) {
      return send(Success(iscreatedProject.value))
    } else {
      return send(Exception(new BussinessError(iscreatedProject.error)))
    }
  }

  return send(Exception(new BussinessError(errors)))
})

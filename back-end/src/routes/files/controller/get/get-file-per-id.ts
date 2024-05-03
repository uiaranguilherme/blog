import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR, STATUS_OK } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaError, SchemaFile } from "@swagger-components"
import serviceGetFilePerId from "../../services/service-get-file-per-id"

CreateRouteDocumentation({
  type: "get",
  path: "/storage/{id}",
  tags: ["Storage"],
  description: "Get file per id",
  parameters: [
    {
      in: "path",
      required: true,
      name: "id",
    },
  ],
  responses: {
    [STATUS_OK]: {
      description: "Success in get file",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaFile",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "error in get file per id",
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
    SchemaFile,
  },
})
export default Controller(async (req, send) => {
  const id = req.params.id as string

  if (id === null || id === undefined) {
    return send(Exception(new BussinessError("Unabled id for find file")))
  }

  const file = await serviceGetFilePerId(id)

  return send(file)
})

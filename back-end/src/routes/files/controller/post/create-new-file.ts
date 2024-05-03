import { STATUS_OK, STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "@constants"
import { BussinessError } from "@handler"
import { Controller, Exception } from "@infra"
import CreateRouteDocumentation from "@swagger"
import { SchemaFile, SchemaFileInput, SchemaError } from "@swagger-components"
import serviceAddNewFile from "../../services/service-add-new-file"

CreateRouteDocumentation({
  path: "/storage",
  type: "post",
  description: "Create new file",
  produces: ["application/json"],
  consumes: ["multipart/form-data"],
  tags: ["Storage"],
  body: {
    content: {
      "multipart/form-data": {
        schema: {
          $ref: "#/components/schemas/SchemaFileInput",
        },
      },
    },
  },
  responses: {
    [STATUS_OK]: {
      description: "Success save file",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SchemaFile",
          },
        },
      },
    },
    [STATUS_BAD_REQUEST]: {
      description: "Error save file",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorSchema",
          },
        },
      },
    },
    [STATUS_INTERNAL_SERVER_ERROR]: {
      description: "Server error",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorSchema",
          },
        },
      },
    },
  },
  definitions: {
    SchemaFile,
    SchemaFileInput,
    SchemaError,
  },
})
export default Controller(async (req, send) => {
  const file = req.file as Express.Multer.File | undefined

  if (file === undefined) {
    return send(Exception(new BussinessError("Unabled find file")))
  }

  const isSuccessInSaveFile = await serviceAddNewFile(file)

  return send(isSuccessInSaveFile)
})

/** @format */

import { IDefinitions, ISwaggerDoc } from "./interface/iswagger"
import PATH from "node:path"
import FS from "node:fs"

const CreateSchema = (schema: IDefinitions) => schema

const CreateRouteDocumentation = (doc: ISwaggerDoc) => {
  if (doc !== undefined) {
    const { tags, description, produces, parameters, responses, path, type, definitions, consumes, body } = doc
    var root = PATH.join(__dirname, "..", "..", "swagger-output.json")

    var data = FS.readFileSync(root, "utf-8")

    if (data === undefined) {
      console.error("Erro ao ler o arquivo")
      return
    }

    const SWAGGER = JSON.parse(data)

    if (SWAGGER.paths === undefined) {
      SWAGGER.paths = {}
    }

    SWAGGER.paths[path] = {
      ...SWAGGER.paths[path],
      [type]: {
        tags,
        description,
        produces,
        consumes,
        parameters,
        responses,
        requestBody: body,
      },
    }

    SWAGGER.components.schemas = {
      ...SWAGGER.components.schemas,
      ...definitions,
    }

    const SWAGGER_UPDATE = JSON.stringify(SWAGGER, null, 2)

    FS.writeFileSync(root, SWAGGER_UPDATE, "utf-8")
  }
}

export { CreateSchema }
export default CreateRouteDocumentation

/** @format */

type MimeTipe =
  | "application/json"
  | "application/xml"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain; charset=utf-8"
  | "text/html"
  | "application/pdf"
  | "image/png"
type RouteType = "get" | "post" | "put" | "delete"
type ParameterType = "string" | "boolean" | "object" | "number" | "array" | "file"
type ParameterIn = "path" | "query" | "body" | "formData"

interface ISchema {
  $ref?: string
  type?: "string" | "boolean" | "object" | "number" | "array" | "file"
}

interface IContent {
  "application/json"?: {
    description?: string
    type?: "string" | "boolean" | "object" | "number" | "array" | "file"
    schema?: ISchema
  }
}

interface IParameter {
  name: string
  in: ParameterIn
  required: boolean
  description?: string
  type?: ParameterType
  format?: ParameterType
  schema?: ISchema
}

interface IResponse {
  [key: number]: {
    description: string
    content?: IContent
  }
}

interface IProperties {
  [key: string]: {
    type: ParameterType
    format?: ParameterType
    example?: any
    items?: IDefinitions
  }
}

interface IDefinitions {
  type: ParameterType
  properties: IProperties
}

interface ISwaggerDoc {
  path: string
  type: RouteType
  tags: string[]
  description: string
  produces?: MimeTipe[]
  consumes?: MimeTipe[]
  parameters?: IParameter[]
  body?: {
    content?: IContent
  }
  responses: IResponse
  definitions?: {
    [key: string]: IDefinitions
  }
}

export { ISwaggerDoc, IDefinitions, IProperties, IResponse, IParameter, ISchema, ParameterIn, ParameterType, RouteType, MimeTipe }

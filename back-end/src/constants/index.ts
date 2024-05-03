import path from "node:path"

export const root = `${path.parse(process.cwd()).root}/storage`
export * from "./exceptions-name"
export * from "./reply-status"

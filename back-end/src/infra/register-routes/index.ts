/** @format */

import { Express } from "express"
import IRoute from "../interface/iroutes"

const RegisterRoutes = (childs: IRoute[], app: Express, pathRaiz?: string): void => {
  childs.map(child => {
    const type = child.type !== undefined ? child.type : "use"
    const controller = child.route !== undefined ? child.route : () => {} // função anonima...
    const path = pathRaiz !== undefined ? `${pathRaiz}${child.path}` : child.path
    const children = child.childs

    if (child.middleware !== undefined && child.middleware !== null) {
      child.middleware.forEach(mid => {
        app.use(path, mid)
      })
    }

    if (children !== undefined) {
      RegisterRoutes(children, app, path)
    } else {
      app[type](path, controller)
    }
  })
}
export { RegisterRoutes, IRoute }

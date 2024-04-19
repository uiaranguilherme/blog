/** @format */

import { Request, Response, NextFunction } from "express"
interface IRoute {
  path: string
  type?: "get" | "post" | "put" | "delete"
  middleware?: ((req: Request, res: Response, next: NextFunction) => void)[]
  route?: (req: Request, res: Response) => void
  childs?: IRoute[]
}

export default IRoute

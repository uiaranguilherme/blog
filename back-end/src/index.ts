import "reflect-metadata"
import AllRoutes from "./routes"
import express from "express"
import * as swaggerFile from "../swagger-output.json"
import * as swaggerUi from "swagger-ui-express"
import * as dotenv from "dotenv"
import { RegisterRoutes, middlewareContextRequest } from "@infra"
import AppDataSource from "@models"
dotenv.config()

AppDataSource.initialize()
  .then(() => {
    const app = express()
    app.use(express.json())
    app.use(middlewareContextRequest)

    RegisterRoutes(AllRoutes, app)

    var swaggerOptions = {
      swaggerOptions: {
        defaultModelExpandDepth: -1,
        defaultModelsExpandDepth: -1,
      },
    }

    app.use("/services/identity/app-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions))

    app.listen(8080, () => console.log("Server is running in http://localhost:8080/services/identity/app-docs"))
  })
  .catch(error => console.log(error))

import "reflect-metadata"
import AllRoutes from "./routes"
import express from "express"
import * as swaggerFile from "../swagger-output.json"
import * as swaggerUi from "swagger-ui-express"
import * as dotenv from "dotenv"
import { RegisterRoutes } from "@infra"
import AppDataSource from "@models"
import { root } from "@constants"
import cors from "cors"
dotenv.config()

AppDataSource.initialize()
  .then(() => {
    const app = express()
    app.use(express.json())
    app.use(cors())

    RegisterRoutes(AllRoutes, app)

    var swaggerOptions = {
      swaggerOptions: {
        defaultModelExpandDepth: -1,
        defaultModelsExpandDepth: -1,
      },
    }

    app.use("/services/app-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions))
    app.use("/static", express.static(root))
    app.listen(8080, () => console.log("Server is running in http://localhost:8080/services/app-docs"))
  })
  .catch(error => console.log(error))

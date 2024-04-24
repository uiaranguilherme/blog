import { DataSource } from "typeorm"
import { AboutMeModel, CompanyHistoryModel, ProjectModel } from "./models"

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/databse.sqlite",
  synchronize: true,
  logging: false,
  entities: [ProjectModel, CompanyHistoryModel, AboutMeModel],
  migrations: [],
  subscribers: [],
})

export default AppDataSource
export const ProjectRepository = AppDataSource.getRepository(ProjectModel)
export const CompanyHistoryRepository = AppDataSource.getRepository(CompanyHistoryModel)
export const AboutMeRepository = AppDataSource.getRepository(AboutMeModel)

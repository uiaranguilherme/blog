import { DataSource } from "typeorm"
import { AboutMeModel, WorkHistoryModel, ProjectModel } from "./models"
import PostModel from "./models/post-model"

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/databse.sqlite",
  synchronize: true,
  logging: false,
  entities: [ProjectModel, WorkHistoryModel, AboutMeModel, PostModel],
  migrations: [],
  subscribers: [],
})

export default AppDataSource
export const ProjectRepository = AppDataSource.getRepository(ProjectModel)
export const WorkHistoryRepository = AppDataSource.getRepository(WorkHistoryModel)
export const AboutMeRepository = AppDataSource.getRepository(AboutMeModel)
export const PostRepository = AppDataSource.getRepository(PostModel)

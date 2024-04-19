/** @format */
//import ProfileRepository from "./models/profile"
import { DataSource } from "typeorm"
import UserModel from "./models/user.entity"
import ProfileModel from "./models/profile.entity"
import RefreshTokenModel from "./models/refresh-token"

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/databse.sqlite",
  synchronize: true,
  logging: false,
  entities: [UserModel, ProfileModel, RefreshTokenModel],
  migrations: [],
  subscribers: [],
})
export default AppDataSource
export const UserRepository = AppDataSource.getRepository(UserModel)
export const ProfileRepository = AppDataSource.getRepository(ProfileModel)
export const RefreshTokenRepository = AppDataSource.getRepository(RefreshTokenModel)

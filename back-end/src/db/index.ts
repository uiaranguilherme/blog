/** @format */
//import ProfileRepository from "./models/profile"

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/databse.sqlite",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
})
export default AppDataSource
//export const UserRepository = AppDataSource.getRepository(UserModel)

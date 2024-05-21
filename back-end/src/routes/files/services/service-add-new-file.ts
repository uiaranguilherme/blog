import { Success } from "@infra"
import { FileRepository } from "@models"
import env from "dotenv"
env.config()

export default async (file: Express.Multer.File) => {
  var File = FileRepository.create({
    destination: file.destination,
    encoding: file.encoding,
    fieldname: file.fieldname,
    filename: file.filename,
    mimetype: file.mimetype,
    originalname: file.originalname,
    path: `${process.env.HOST}/static/${file.originalname}`,
    size: file.size,
  })

  await FileRepository.save(File)

  return Success(File)
}

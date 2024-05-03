import { Success } from "@infra"
import { FileRepository } from "@models"

export default async (file: Express.Multer.File) => {
  var File = FileRepository.create({
    destination: file.destination,
    encoding: file.encoding,
    fieldname: file.fieldname,
    filename: file.filename,
    mimetype: file.mimetype,
    originalname: file.originalname,
    path: file.path,
    size: file.size,
  })

  await FileRepository.save(File)

  return Success(File)
}

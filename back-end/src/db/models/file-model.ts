import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IFile } from "./interfaces/ifile"

@Entity()
class FileModel implements IFile {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  fieldname: string

  @Column()
  originalname: string

  @Column()
  encoding: string

  @Column()
  mimetype: string

  @Column()
  size: number

  @Column()
  destination: string

  @Column()
  filename: string

  @Column()
  path: string

  @Column({
    type: "date",
    default: () => Date.now(),
  })
  createdAt: Date
}

export default FileModel

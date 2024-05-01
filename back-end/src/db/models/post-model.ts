import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import IPost from "./interfaces/ipost"

@Entity()
class PostModel implements IPost {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  img: string

  @Column()
  description: string

  @Column("varchar", { array: true })
  tags: string

  @Column()
  content: string

  @Column({
    type: "date",
    default: () => Date.now(),
  })
  createdAt: Date

  @Column({
    type: "date",
    default: () => Date.now(),
  })
  updatedAt: Date
}

export default PostModel

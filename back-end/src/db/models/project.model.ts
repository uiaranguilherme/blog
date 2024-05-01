import { AfterInsert, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import IProject from "./interfaces/iproject"

@Entity()
class ProjectModel implements IProject {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  type: string

  @Column("varchar", { array: true })
  stacks: string

  @Column()
  git: string

  @Column()
  url: string

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

export default ProjectModel

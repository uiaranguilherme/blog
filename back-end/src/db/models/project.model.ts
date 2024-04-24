import { AfterLoad, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
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

  @Column()
  @BeforeInsert()
  joinStacks() {
    if (Array.isArray(this.stacks)) {
      this.stacks = JSON.stringify(this.stacks)
    }
  }
  @AfterLoad()
  parseStacks() {
    this.stacks = JSON.parse(this.stacks)
  }
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

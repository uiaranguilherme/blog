import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import IAboutMe from "./interfaces/iabout-me"

@Entity()
class AboutMeModel implements IAboutMe {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  img: string

  @Column()
  history: string

  @Column({
    type: "date",
    default: () => Date.now(),
  })
  birth: Date

  @Column()
  hometown: string
}

export default AboutMeModel

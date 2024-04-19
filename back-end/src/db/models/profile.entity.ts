import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import IProfile from "./interfaces/iprofile"

@Entity()
class ProfileModel implements IProfile {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  user: string

  @Column()
  profile: string

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

export default ProfileModel

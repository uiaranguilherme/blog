import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IRefreshToken } from "@models-interface"

@Entity()
class RefreshTokenModel implements IRefreshToken {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  espiresIn: number

  @Column()
  user: string
}

export default RefreshTokenModel

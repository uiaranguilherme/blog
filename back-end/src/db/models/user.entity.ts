import { AfterInsert, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import IUser from "./interfaces/iuser"
import { hashPassword } from "src/security/bcrypt"

@Entity()
class UserModel implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string

  @Column()
  password: string

  @AfterInsert()
  @BeforeInsert()
  doBeforeInsertion() {
    this.password = hashPassword(this.password)
  }
}

export default UserModel

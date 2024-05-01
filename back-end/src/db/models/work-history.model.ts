import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import IWorkHistory from "./interfaces/iwork-history"

@Entity()
class CompanyHistoryModel implements IWorkHistory {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  company: string

  @Column()
  office: string

  @Column()
  office_description: string

  @Column({
    type: "date",
    default: () => Date.now(),
  })
  when_arrived: Date

  @Column({
    type: "date",
    default: () => Date.now(),
  })
  when_came_out: Date
}

export default CompanyHistoryModel

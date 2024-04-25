import { BussinessError } from "@handler"
import { Exception, Success } from "@infra"
import { AboutMeRepository } from "@models"

export default async () => {
  const aboutMe = await AboutMeRepository.find({})

  if (aboutMe[0] !== null && aboutMe[0] !== undefined) {
    return Success(aboutMe[0])
  }

  return Exception(new BussinessError("Unable to obtain data"))
}

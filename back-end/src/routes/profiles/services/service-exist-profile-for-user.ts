import { Success } from "@infra"
import { ProfileRepository } from "@models"
import { IProfile } from "src/db/models/interfaces"
import { IResponse } from "src/infra/interface/icustom-controller"

export default async ({ profile, user }: IProfile) => {
  if (await ProfileRepository.exists({ where: { profile, user } })) {
    return Success(true)
  }

  return Success(false)
}

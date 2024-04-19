import { BussinessError, ConflictError } from "@handler"
import { Exception, Success } from "@infra"
import { ProfileRepository } from "@models"
import { IProfile } from "@models-interface"
import serviceExistProfileForUser from "./service-exist-profile-for-user"
import serviceExistUser from "src/routes/user/services/service-exist-user"

export default async (profile: IProfile) => {
  if (profile !== undefined) {
    profile = ProfileRepository.create(profile)

    const existUser = await serviceExistUser(profile.user)
    if (existUser.value === true) {
      return Exception(new ConflictError("Unable to find user"))
    }

    const existProfile = await serviceExistProfileForUser(profile)
    if (existProfile.value === true) {
      return Exception(new ConflictError("Existing profile on the base"))
    }

    await ProfileRepository.save(profile)
    return Success("Profile added successfully")
  }

  return Exception(new BussinessError("Unable to add profile"))
}

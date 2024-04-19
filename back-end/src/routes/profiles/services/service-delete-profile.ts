import { BussinessError, ConflictError } from "@handler"
import { Exception, Success } from "@infra"
import { IProfile } from "@models-interface"
import serviceExistUser from "src/routes/user/services/service-exist-user"
import serviceExistProfileForUser from "./service-exist-profile-for-user"
import { ProfileRepository } from "@models"

export default async (profile: IProfile) => {
  if ((await serviceExistUser(profile.user)).value === false) {
    return Exception(
      new ConflictError("It was not possible to find the user associated with the profile, to delete the profile, check the data and try again")
    )
  }

  if ((await serviceExistProfileForUser(profile)).value === false) {
    return Exception(new BussinessError("Unable to find profile, to delete, check the data and try again"))
  }

  await ProfileRepository.delete({ id: profile.profile })

  return Success("profile deleted")
}

import { ConflictError } from "@handler"
import { Exception, Success } from "@infra"
import { ProfileRepository } from "@models"
import serviceExistUser from "src/routes/user/services/service-exist-user"

export default async (user: string) => {
  if ((await serviceExistUser(user)).value === false) {
    return Exception(new ConflictError("Unable to identify user, check your details and try again"))
  }
  var profiles = await ProfileRepository.find({ where: { user } })
  var array = profiles.map(prof => prof.profile)
  return Success(array)
}

import { UserRepository } from "@models"
import { IReqUpdateProfile } from "../interfaces/iprofile"
import { Exception } from "@infra"
import { BussinessError } from "@handler"
import serviceNewProfile from "src/routes/profiles/services/service-new-profile"
import serviceExistProfileForUser from "src/routes/profiles/services/service-exist-profile-for-user"

export default async ({ email, profile }: IReqUpdateProfile) => {
  const user = await UserRepository.findOne({ where: { email } })

  if (user !== null) {
    for (var prof of profile) {
      if ((await serviceExistProfileForUser({ profile: prof, user: user.id })).value === false) {
        continue
      }

      var res = await serviceNewProfile({ profile: prof, user: user.id })

      if (res.isSuccess === false) {
        return Exception(new BussinessError(`Unable to add profile ${prof}`))
      }
    }
  }

  return Exception(new BussinessError("Unable to find user"))
}

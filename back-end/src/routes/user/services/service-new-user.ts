import serviceNewProfile from "src/routes/profiles/services/service-new-profile"
import { IUser } from "src/db/models/interfaces"
import { Exception, Success } from "@infra"
import { BussinessError } from "@handler"
import { UserRepository } from "@models"
import { Profile } from "@constants"
import { addNewUserInSystem } from "@node-extensions"

export default async (user: IUser) => {
  if (user !== undefined) {
    const isCreatedUserSystem = addNewUserInSystem({ name: user.firstName, password: user.password })

    if (isCreatedUserSystem.isSuccess === false && isCreatedUserSystem.error) {
      return Exception(isCreatedUserSystem.error)
    }

    user = UserRepository.create(user)

    if (await UserRepository.findOne({ where: { email: user.email } })) {
      return Exception(new BussinessError("There is already a registered user with this email"))
    }

    user = await UserRepository.save(user)

    await serviceNewProfile({
      profile: Profile.USER,
      user: user.id,
    })

    return Success("User created successfully")
  }

  return Exception(new BussinessError("Unable to create user, please check the data and try again later"))
}

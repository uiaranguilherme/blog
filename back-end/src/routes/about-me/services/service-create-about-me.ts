import { AboutMeRepository } from "@models"
import { IReqCreateAboutMe } from "../interfaces/icreate-about-me"
import { Success } from "@infra"

export default async (aboutMe: IReqCreateAboutMe) => {
  var aboutMeOthers = await AboutMeRepository.find({})

  aboutMeOthers.map(ab => {
    return AboutMeRepository.delete(ab.id)
  })

  aboutMe = AboutMeRepository.create(aboutMe)
  await AboutMeRepository.save(aboutMe)

  return Success("Success in create About-me")
}

import { BussinessError, Response } from "@handler"
import { Exception, Success } from "@infra"
import { execSync } from "child_process"

interface IUserSystem {
  name: string
  password: string
  group?: string[]
}

const addUserWin32 = (user: IUserSystem): Response => {
  try {
    execSync(`net user ${user.name} ${user.password} /add`)

    if (user.group !== undefined) {
      user.group.forEach(group => {
        execSync(`net localgroup ${user.name} ${group} /add`)
      })
    }

    return Success(true)
  } catch (err) {
    return Exception(new BussinessError("Unable to add user to the system"))
  }
}

const addUserLinux = (user: IUserSystem): Response => {
  try {
    execSync(`sudo adduser ${user.name}`)
    execSync(`sudo passwd ${user.password}`)

    if (user.group !== undefined) {
      user.group.forEach(group => {
        execSync(`sudo adduser ${user.name} ${group}`)
      })
    }
    //adicionar caminho home para usuario...
    execSync(`sudo adduser --home /home/${user.name}`)

    return Success(true)
  } catch (err) {
    return Exception(new BussinessError("Unable to add user to the system"))
  }
}

export default (user: IUserSystem): Response => {
  switch (process.platform) {
    case "linux":
      return addUserLinux(user)

    default:
      return addUserWin32(user)
  }
}

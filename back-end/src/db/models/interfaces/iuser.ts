interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  profile?: string[]
}

export default IUser

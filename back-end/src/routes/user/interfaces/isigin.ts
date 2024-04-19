export interface IReqLogin {
  email: string
  password: string
}

export interface IResLogin {
  email: string
  name: string
  token: string
  refresh_token: string
}

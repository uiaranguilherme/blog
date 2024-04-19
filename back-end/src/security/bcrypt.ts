import bcrypt from "bcrypt"

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}

export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10)
}

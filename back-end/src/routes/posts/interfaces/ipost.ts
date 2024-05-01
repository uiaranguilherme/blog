export default interface IPost {
  id?: string
  name: string
  img: string
  description: string
  tags: string[]
  content: string
  createdAt?: Date
  updatedAt?: Date
}

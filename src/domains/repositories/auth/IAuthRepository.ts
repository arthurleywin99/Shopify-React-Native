import { User } from '@/domains/entities'

export interface IAuthRepository {
  register({
    email,
    password,
    phoneNumber,
  }: {
    email: string
    password: string
    phoneNumber: string
  }): Promise<User>
}

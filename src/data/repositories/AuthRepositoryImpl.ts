import { IAuthRepository } from '@/domains/repositories'
import { HttpClient } from '../api/HttpClient'
import { UserDTO } from '../models/UserDTO'
import { User } from '@/domains/entities'

export class AuthRepositoryImpl implements IAuthRepository {
  async register({
    email,
    password,
    phoneNumber,
  }: {
    email: string
    password: string
    phoneNumber: string
  }): Promise<User> {
    const res = await HttpClient.post<UserDTO>('/register', {
      email,
      password,
      phoneNumber,
    })
    return new User(res.id, res.email, res.phoneNumber)
  }
}

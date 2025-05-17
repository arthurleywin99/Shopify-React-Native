import { User } from '../entities'
import { IAuthRepository } from '../repositories/auth/IAuthRepository'

export class RegisterUserUseCase {
  constructor(private readonly userRepo: IAuthRepository) {}

  async execute(data: {
    email: string
    password: string
    phoneNumber: string
  }): Promise<User> {
    return this.userRepo.register(data)
  }
}

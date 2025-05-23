import { AuthRepositoryImpl } from '@/data/repositories/AuthRepositoryImpl'
import { User } from '../entities'
import { Asset } from 'react-native-image-picker'

export class RegisterUserUseCase {
  constructor(private readonly userRepo: AuthRepositoryImpl) {}

  async execute(data: {
    email: string
    password: string
    phoneNumber: string
    avatar: Asset | null
  }): Promise<User | null> {
    try {
      return this.userRepo.register(data)
    } catch (error) {
      throw error
    }
  }
}

import { IAuthRepository } from '@/domains/repositories'
import { User } from '@/domains/entities'
import { AuthRemoteDataSource } from '../datasources'
import { Asset } from 'react-native-image-picker'
import { HttpStatusCode } from 'axios'

export class AuthRepositoryImpl implements IAuthRepository {
  private static instance: AuthRepositoryImpl

  constructor(private readonly authRemoteDataSource: AuthRemoteDataSource) {}

  public static getInstance(authRemoteDataSource: AuthRemoteDataSource) {
    if (!AuthRepositoryImpl.instance) {
      AuthRepositoryImpl.instance = new AuthRepositoryImpl(authRemoteDataSource)
    }
    return AuthRepositoryImpl.instance
  }

  async register(data: {
    email: string
    password: string
    phoneNumber: string
    avatar: Asset | null
  }): Promise<User> {
    try {
      const response = await this.authRemoteDataSource.register(data)

      if (response.status === HttpStatusCode.Ok) {
        const { id, email, phoneNumber, avatar } = response.data

        return new User(id, email, phoneNumber, avatar)
      }

      throw new Error('Unexpected response')
    } catch (error) {
      throw error
    }
  }
}

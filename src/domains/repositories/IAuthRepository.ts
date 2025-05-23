import { User } from '@/domains/entities'
import { Asset } from 'react-native-image-picker'

export interface IAuthRepository {
  register({
    email,
    password,
    phoneNumber,
    avatar,
  }: {
    email: string
    password: string
    phoneNumber: string
    avatar: Asset | null
  }): Promise<User>
}

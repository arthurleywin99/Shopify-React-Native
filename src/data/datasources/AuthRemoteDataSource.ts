import { Asset } from 'react-native-image-picker'
import { HttpClient, type HTTPResponse } from '../api/HttpClient'
import { UserDTO } from '../models'

export class AuthRemoteDataSource {
  private static instance: AuthRemoteDataSource

  constructor(private readonly httpClient: HttpClient) {}

  public static getInstance(httpClient: HttpClient) {
    if (!AuthRemoteDataSource.instance) {
      AuthRemoteDataSource.instance = new AuthRemoteDataSource(httpClient)
    }
    return AuthRemoteDataSource.instance
  }

  async register({
    email,
    password,
    phoneNumber,
    avatar,
  }: {
    email: string
    password: string
    phoneNumber: string
    avatar: Asset | null
  }): Promise<HTTPResponse<UserDTO>> {
    const formData = new FormData()

    avatar &&
      formData.append('file', {
        uri: avatar.uri,
        name: avatar.fileName,
        type: avatar.type,
      })

    formData.append('email', email)
    formData.append('password', password)
    formData.append('phoneNumber', phoneNumber)

    return await this.httpClient.post<UserDTO>(
      '/v1/api/auth/signup',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
  }
}

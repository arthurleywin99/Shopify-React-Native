import { Asset } from 'react-native-image-picker'
import { HttpClient, type HTTPResponse } from '../api/HttpClient'

export class UtilRemoteDataSource {
  private static instance: UtilRemoteDataSource

  constructor(private readonly httpClient: HttpClient) {}

  public static getInstance(httpClient: HttpClient) {
    if (!UtilRemoteDataSource.instance) {
      UtilRemoteDataSource.instance = new UtilRemoteDataSource(httpClient)
    }
    return UtilRemoteDataSource.instance
  }

  async uploadImage(image: Asset): Promise<HTTPResponse<string>> {
    const formData = new FormData()

    formData.append('file', {
      uri: image.uri,
      name: image.fileName,
      type: image.type,
    })

    return await this.httpClient.post<string>(
      '/v1/api/common/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
  }
}

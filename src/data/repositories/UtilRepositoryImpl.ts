import { IUtilRepository } from '@/domains/repositories'
import { Asset } from 'react-native-image-picker'
import { UtilRemoteDataSource } from '../datasources'
import { HttpStatusCode } from 'axios'
import Toast from 'react-native-toast-message'
import { getError } from '@/config/exceptions'

export class UtilRepositoryImpl implements IUtilRepository {
  private static instance: UtilRepositoryImpl

  constructor(private readonly utilRemoteDataSource: UtilRemoteDataSource) {}

  public static getInstance(utilRemoteDataSource: UtilRemoteDataSource) {
    if (!this.instance) {
      this.instance = new UtilRepositoryImpl(utilRemoteDataSource)
    }
    return this.instance
  }

  async uploadImage(image: Asset): Promise<string> {
    try {
      const { data, status } = await this.utilRemoteDataSource.uploadImage(
        image,
      )

      if (status === HttpStatusCode.Created) {
        return data
      }

      throw new Error('Unexpected response')
    } catch (error) {
      throw error
    }
  }
}

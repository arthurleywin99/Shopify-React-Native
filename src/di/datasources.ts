import { HttpClient } from '@/data/api/HttpClient'
import { AuthRemoteDataSource, UtilRemoteDataSource } from '@/data/datasources/'

export const authRemoteDataSource = AuthRemoteDataSource.getInstance(
  HttpClient.getInstance(),
)

export const utilRemoteDataSource = UtilRemoteDataSource.getInstance(
  HttpClient.getInstance(),
)

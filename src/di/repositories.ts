import { AuthRepositoryImpl, UtilRepositoryImpl } from '@/data/repositories'
import { authRemoteDataSource, utilRemoteDataSource } from './datasources'

export const authRepository =
  AuthRepositoryImpl.getInstance(authRemoteDataSource)

export const utilRepository =
  UtilRepositoryImpl.getInstance(utilRemoteDataSource)

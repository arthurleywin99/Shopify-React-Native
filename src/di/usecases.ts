import { RegisterUserUseCase } from '@/domains/usecases/RegisterUserUsecase'
import { authRepository } from './repositories'

export const registerUserUseCase = new RegisterUserUseCase(authRepository)

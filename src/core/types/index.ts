import { AppRoutes } from '@/core/enums'

export type RootStackParamList = {
  [AppRoutes.START_SCREEN]: undefined
  [AppRoutes.SIGNUP_SCREEN]: undefined
  [AppRoutes.SIGNIN_SCREEN]: undefined
}

export type NoneToVoidFunction = () => void

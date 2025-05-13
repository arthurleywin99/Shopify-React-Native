import { AppRoutes } from '../enums'

export type RootStackParamList = {
  [AppRoutes.START_SCREEN]: undefined
  [AppRoutes.SIGNUP_SCREEN]: undefined
}

export type NoneToVoidFunction = () => void

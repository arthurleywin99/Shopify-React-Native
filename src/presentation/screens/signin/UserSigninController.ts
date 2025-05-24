import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signinForm = z.object({
  email: z.string().email('Invalid email address'),
})

export type SigninFormData = {
  email: string
}

export default function useUserSigninController() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinForm),
  })

  function handlePressNext() {}

  function handlePressCancel() {}

  return {
    formControl: control,
    formErrors: errors,
    onPressNext: handlePressNext,
    onPressCancel: handlePressCancel,
  }
}

import { DIContainer } from '@/di'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Asset, launchImageLibrary } from 'react-native-image-picker'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ALLOWED_CHARS, PASSWORD_REGEX } from '@/config/constants/regex'
import { zodResolver } from '@hookform/resolvers/zod'
import { Toast } from '../../components'
import { getError } from '@/config/exceptions'

const signupForm = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(18, 'Password must be no more than 18 characters')
    .refine(value => PASSWORD_REGEX.test(value), {
      message:
        'Password must include uppercase, lowercase, number, and one of _@- .|',
    })
    .refine(val => ALLOWED_CHARS.test(val), {
      message:
        'Password contains invalid special characters. Only _@- .| allowed.',
    }),
  phoneNumber: z.object({
    code: z.string().min(1, 'Country code is required'),
    number: z
      .string()
      .min(6, 'Phone number is too short')
      .regex(/^\d+$/, 'Phone number must contain only digits'),
  }),
})

export type SignupFormData = z.infer<typeof signupForm>

export function useUserSignupController() {
  const navigation = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupForm),
  })

  const [photoData, setPhotoData] = useState<Asset | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function registerAction(values: SignupFormData) {
    try {
      if (isSubmitting) return
      setIsSubmitting(true)

      const user = await DIContainer.registerUserUseCase.execute({
        ...values,
        phoneNumber: values.phoneNumber.code + values.phoneNumber.number,
        avatar: photoData,
      })

      if (user) {
        Toast.show({
          type: 'success',
          title: 'Registered successfully!',
          onHide: () => {
            // TODO: Navigate to Login Screen
          },
        })
      }
    } catch (error) {
      const message = getError(error)

      Toast.show({
        type: 'error',
        title: 'Error!',
        description: message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handlePressUploadPhoto() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1,
    })

    if (result.assets && result.assets.length > 0) {
      setPhotoData(result.assets[0] || null)
    }
  }

  function handlePressCancel() {
    navigation.goBack()
  }

  return {
    formControl: control,
    formErrors: errors,
    isSubmitting,
    photoUri: photoData?.uri,
    onPressUploadPhoto: handlePressUploadPhoto,
    onPressCancel: handlePressCancel,
    onPressDone: handleSubmit(registerAction),
  }
}

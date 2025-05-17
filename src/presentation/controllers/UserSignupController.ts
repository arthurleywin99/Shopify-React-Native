import { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'

export function useUserSignupController() {
  const [photoUri, setPhotoUri] = useState<string | null>(null)

  async function handlePressUploadPhoto() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1,
    })

    if (result.assets && result.assets.length > 0) {
      setPhotoUri(result.assets[0].uri || null)
    }
  }

  function handlePressDone() {}

  function handlePressCancel() {}

  return {
    photoUri,
    onPressUploadPhoto: handlePressUploadPhoto,
    onPressDone: handlePressDone,
    onPressCancel: handlePressCancel,
  }
}

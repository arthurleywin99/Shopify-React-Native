import { Asset } from 'react-native-image-picker'

export interface IUtilRepository {
  uploadImage(image: Asset): Promise<string>
}

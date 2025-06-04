import { StyleProp, TextStyle } from 'react-native'
import Toast, { ToastShowParams } from 'react-native-toast-message'

type ToastParams = Omit<
  ToastShowParams,
  'text1' | 'text2' | 'text1Style' | 'text2Style' | 'text2NumberOfLines'
> & {
  title: string
  description?: string
  titleStyle?: StyleProp<TextStyle>
  descriptionStyle?: StyleProp<TextStyle>
}

export default class ToastMessage {
  static show(params: ToastParams) {
    const { title, description, titleStyle, descriptionStyle } = params

    Toast.show({
      ...params,
      text1: title,
      text2: description,
      text1Style: titleStyle,
      text2Style: descriptionStyle,
    })
  }

  static hide() {
    Toast.hide()
  }
}

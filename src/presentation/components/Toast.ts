import { StyleProp, TextProps, TextStyle } from 'react-native'
import * as ToastMessage from 'react-native-toast-message'

type ToastParams = Omit<
  ToastMessage.ToastShowParams,
  | 'text1'
  | 'text2'
  | 'text1Style'
  | 'text2Style'
  | 'text1Props'
  | 'text2Props'
  | 'text2NumberOfLines'
> & {
  title: string
  description?: string
  titleStyle?: StyleProp<TextStyle>
  descriptionStyle?: StyleProp<TextStyle>
  titleProps?: TextProps
  descriptionProps?: TextProps
  descriptionNumberOfLines?: number
}

export default class Toast {
  static show(params: ToastParams) {
    ToastMessage.default.show(params)
  }

  static hide() {
    ToastMessage.default.hide()
  }
}

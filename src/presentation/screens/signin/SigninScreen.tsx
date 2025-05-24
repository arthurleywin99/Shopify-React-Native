import {
  LoginBubbleIcon1,
  LoginBubbleIcon2,
  LoginBubbleIcon3,
  LoginBubbleIcon4,
} from '@/assets/icons/BubbleIcon'
import {
  Button,
  NunitoSansText,
  RalewayText,
  TextInput,
} from '@/presentation/components'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import useUserSigninController, { SigninFormData } from './UserSigninController'
import { Colors } from '@/config/constants'

const SigninScreen = () => {
  const { formControl, formErrors, onPressNext, onPressCancel } =
    useUserSigninController()

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          scrollToOverflowEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={[styles.absolute, styles.bubble2]}>
            <LoginBubbleIcon2 />
          </View>
          <View style={[styles.absolute, styles.bubble1]}>
            <LoginBubbleIcon1 />
          </View>
          <View style={[styles.absolute, styles.bubble3]}>
            <LoginBubbleIcon3 />
          </View>
          <View style={[styles.absolute, styles.bubble4]}>
            <LoginBubbleIcon4 />
          </View>
          <View style={[styles.absolute, styles.formContainer]}>
            <RalewayText style={styles.title}>Login</RalewayText>
            <NunitoSansText style={styles.greetingText}>
              Good to see you back! 🖤
            </NunitoSansText>
            <View style={styles.form}>
              <TextInput<SigninFormData>
                name="email"
                autoCapitalize="none"
                control={formControl}
                placeholder="Email"
                error={formErrors.email?.message}
              />
            </View>
            <View style={styles.centerWrapper}>
              <Button type="primary" title="Next" onPress={onPressNext} />
              <Button type="secondary" title="Cancel" onPress={onPressCancel} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  absolute: {
    position: 'absolute',
  },
  bubble1: {
    top: 0,
    zIndex: 1,
  },
  bubble2: {
    top: 0,
    zIndex: 1,
  },
  bubble3: {
    top: '25%',
    right: 0,
    zIndex: 1,
  },
  bubble4: {
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  centerWrapper: {
    alignItems: 'center',
    width: '100%',
    gap: 18,
  },
  title: {
    fontWeight: '700',
    fontSize: 60,
    marginLeft: 10,
    marginTop: 78,
  },
  greetingText: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: 100,
    marginTop: 4,
  },
  formContainer: {
    bottom: 0,
    paddingHorizontal: 20,
    marginBottom: 50,
    zIndex: 2,
    width: '100%',
  },
  form: {
    marginBottom: 36,
    marginTop: 17,
  },
})

export default SigninScreen

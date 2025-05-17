import {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import {
  Button,
  PhoneInput,
  RalewayText,
  TextInput,
} from '@/presentation/components'
import { BubbleIcon1, BubbleIcon2 } from '@/assets/icons'
import { useUserSignupController } from '@/presentation/controllers'

const SignupScreen = () => {
  const { photoUri, onPressUploadPhoto, onPressDone, onPressCancel } =
    useUserSignupController()

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
          <View style={styles.bubble2}>
            <BubbleIcon2 />
          </View>
          <View style={styles.bubble1}>
            <BubbleIcon1 />
          </View>
          <RalewayText style={styles.title}>Create{'\n'}Account</RalewayText>
          <View style={styles.formContainer}>
            <TouchableOpacity
              style={styles.uploadPhotoIcon}
              onPress={onPressUploadPhoto}>
              <Image
                style={styles.uploadPhotoIcon}
                source={
                  photoUri
                    ? { uri: photoUri }
                    : require('@/assets/icons/UploadPhotoIcon.png')
                }
              />
            </TouchableOpacity>
            <View style={styles.form}>
              <TextInput placeholder="Email" />
              <TextInput
                placeholder="Password"
                textContentType="password"
                secureTextEntry
              />
              <PhoneInput placeholder="Your number" />
            </View>
          </View>
          <View style={styles.centerWrapper}>
            <Button type="primary" title="Done" onPress={onPressDone} />
            <Button type="secondary" title="Cancel" onPress={onPressCancel} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  uploadPhotoIcon: {
    width: 90,
    height: 90,
    borderRadius: '50%',
  },
  title: {
    fontWeight: '700',
    fontSize: 60,
    marginLeft: 10,
    marginTop: 78,
  },
  centerWrapper: {
    alignItems: 'center',
    width: '100%',
    gap: 18,
  },
  formContainer: {
    gap: 32,
    marginTop: 16,
  },
  form: {
    gap: 16,
    marginBottom: 16,
  },
  bubble1: {
    position: 'absolute',
    top: 75,
    right: 0,
  },
  bubble2: {
    position: 'absolute',
    top: -20,
    left: -20,
  },
})

export default SignupScreen

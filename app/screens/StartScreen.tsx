import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Logo } from '../assets/images'
import { Button, NunitoSansText, RalewayText } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes } from '../enums'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import { Colors } from '../constants'

const StartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  function handlePressLetGetStarted() {
    navigation.navigate(AppRoutes.SIGNUP_SCREEN)
  }

  function handlePressAlreadyHaveAccount() {}

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View style={styles.centerWrapper}>
        <View style={styles.shadow}>
          <Logo />
        </View>
        <RalewayText style={styles.appTitle}>Shoppe</RalewayText>
        <NunitoSansText style={styles.appDescription}>
          Beautiful eCommerce UI Kit{'\n'}for your online store
        </NunitoSansText>
      </View>
      <View style={styles.centerWrapper}>
        <Button
          type="primary"
          title="Let's get started"
          onPress={handlePressLetGetStarted}
        />
        <Button
          type="secondary"
          title="I already have an account"
          onPress={handlePressAlreadyHaveAccount}
          suffixIcon
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.bgPrimary,
  },
  centerWrapper: {
    alignItems: 'center',
    width: '100%',
    gap: 18,
  },
  shadow: {
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.16)',
    borderRadius: '50%',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  appTitle: {
    fontWeight: 700,
    fontSize: 52,
    marginTop: 24,
    marginBottom: 18,
  },
  appDescription: {
    fontWeight: 300,
    fontSize: 19,
    textAlign: 'center',
  },
})

export default StartScreen

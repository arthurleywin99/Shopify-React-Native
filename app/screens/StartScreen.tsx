import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Logo } from '../assets/images'
import { ArrowRightIcon } from '../assets/icons'
import { NunitoSansText, RalewayText } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../constants'

const StartScreen = () => {
  function handlePressLetGetStarted() {}

  function handlePressAlreadyHaveAccount() {}

  return (
    <SafeAreaView style={[styles.container]}>
      <View />
      <View style={[styles.centerWrapper]}>
        <View style={[styles.shadow]}>
          <Logo />
        </View>
        <RalewayText style={[styles.appTitle]}>Shoppe</RalewayText>
        <NunitoSansText style={[styles.appDescription]}>
          Beautiful eCommerce UI Kit{'\n'}for your online store
        </NunitoSansText>
      </View>
      <View style={[styles.centerWrapper]}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handlePressLetGetStarted}>
          <NunitoSansText style={[styles.primaryText]}>
            Let's get started
          </NunitoSansText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handlePressAlreadyHaveAccount}>
          <NunitoSansText style={[styles.secondaryText]}>
            I already have an account
          </NunitoSansText>
          <ArrowRightIcon />
        </TouchableOpacity>
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
  button: {
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.backgroundPrimary,
    paddingVertical: 16,
  },
  secondaryButton: {
    color: Colors.textSecondary,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  primaryText: {
    color: Colors.textPrimary,
    fontSize: 22,
    fontWeight: 300,
  },
  secondaryText: {
    color: Colors.textSecondary,
    fontSize: 16,
    fontWeight: 300,
  },
})

export default StartScreen

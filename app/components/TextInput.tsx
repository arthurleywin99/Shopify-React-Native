import React from 'react'
import { StyleSheet, TextInput as RNTextInput } from 'react-native'
import { Colors } from '../constants'

const TextInput = (props: RNTextInput['props']) => {
  return (
    <RNTextInput {...props} style={[styles.container, props.style]} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.inputBackground,
    color: Colors.textSecondary,
    tintColor: Colors.inputTintColor,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 60,
    fontSize: 14,
    fontWeight: '500'
  }
})

export default TextInput

import React from 'react'
import { StyleSheet, Text } from 'react-native'

const RalewayFont: Record<string, string> = {
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
}

type TextProps = Text['props']

function RalewayText(props: TextProps) {
  const { fontWeight = '400', fontStyle } = StyleSheet.flatten(
    props.style || {},
  )

  const fontFamily = `Raleway-${RalewayFont[fontWeight]}${
    fontStyle === 'italic' ? 'Italic' : ''
  }`

  return <Text {...props} style={[props.style, { fontFamily }]} />
}

export default RalewayText

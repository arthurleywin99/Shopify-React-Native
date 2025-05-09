import React from 'react'
import { StyleSheet, Text } from 'react-native'

const NunitoSansFont: Record<string, string> = {
  '100': 'ExtraLight',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
  heavy: 'ExtraBlack',
}

type TextProps = Text['props']

function NunitoSansText(props: TextProps) {
  const { fontWeight = '400', fontStyle } = StyleSheet.flatten(
    props.style || {},
  )

  const fontFamily = `NunitoSans-${NunitoSansFont[fontWeight]}${
    fontStyle === 'italic' ? 'Italic' : ''
  }`

  return <Text {...props} style={[props.style, { fontFamily }]} />
}

export default NunitoSansText

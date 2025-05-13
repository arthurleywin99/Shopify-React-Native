import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type Props = {
  width?: number
  height?: number
  style?: StyleProp<ViewStyle>
}

const ArrowDownIcon = ({ width = 17, height = 17, style = {} }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      style={style}>
      <Path
        d="M8.29267 11.3935C7.83151 11.3935 7.37035 11.2157 7.02119 10.8665L2.72581 6.57111C2.53476 6.38006 2.53476 6.06383 2.72581 5.87278C2.91686 5.68173 3.23308 5.68173 3.42414 5.87278L7.71952 10.1682C8.03574 10.4844 8.5496 10.4844 8.86583 10.1682L13.1612 5.87278C13.3523 5.68173 13.6685 5.68173 13.8595 5.87278C14.0506 6.06383 14.0506 6.38006 13.8595 6.57111L9.56416 10.8665C9.21499 11.2157 8.75383 11.3935 8.29267 11.3935Z"
        fill="#1F1F1F"
      />
    </Svg>
  )
}

export default ArrowDownIcon

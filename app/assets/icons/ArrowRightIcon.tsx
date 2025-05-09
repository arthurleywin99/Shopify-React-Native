import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  height?: number
  width?: number
}

const ArrowRightIcon = ({ height = 30, width = 30 }: Props) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 30 30" fill="none">
      <Path
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
        fill="#004CFF"
      />
      <Path
        d="M16.6715 9.29492L15.4918 10.4987L19.2475 14.146H8.08887V15.8312H19.2475L15.4918 19.4785L16.6715 20.6822L22.5457 14.9886L16.6715 9.29492Z"
        fill="white"
      />
    </Svg>
  )
}

export default ArrowRightIcon

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  width?: number
  height?: number
}

const Logo = ({ width = 82, height = 92 }: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 82 92" fill="none">
      <Path
        d="M74.4857 88.2305L0 89.0684L13.1998 16.127L65.6855 19.1256L74.4857 88.2305Z"
        fill="#8BC6FF"
      />
      <Path
        d="M81.3998 92H11.8379L12.2287 88.9313L74.4857 88.2308L65.9912 21.5261L74.4857 20.6151L81.3998 92Z"
        fill="#0051FF"
        fillOpacity={0.6}
      />
      <Path
        d="M12.229 88.9316L20.1874 26.4361L65.9915 21.5264L74.486 88.2311L12.229 88.9316Z"
        fill="#0051FF"
        fillOpacity={0.6}
      />
      <Path
        d="M57.353 14.1611H52.9023C52.9023 8.80543 48.5437 4.44892 43.185 4.44892C37.8273 4.44892 33.4678 8.80543 33.4678 14.1611H29.0171C29.0171 6.35308 35.373 0.000199318 43.185 0.000199318C50.9971 0.000199318 57.353 6.35308 57.353 14.1611Z"
        fill="#5982DA"
      />
    </Svg>
  )
}

export default Logo

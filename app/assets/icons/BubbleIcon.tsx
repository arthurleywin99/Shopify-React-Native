import Svg, { Path } from 'react-native-svg'

type Props = {
  width?: number
  height?: number
}

const BubbleIcon1 = ({ width = 92, height = 267 }: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 92 267" fill="none">
      <Path
        d="M122.963 23.974C180.48 -54.2608 244.361 78.3258 244.361 145.372C244.361 212.419 190.009 266.771 122.963 266.771C55.9163 266.771 -7.28414 215.724 1.56448 145.372C10.4131 75.0205 65.4455 102.209 122.963 23.974Z"
        fill="#004BFE"
      />
    </Svg>
  )
}

const BubbleIcon2 = ({ width = 228, height = 213 }: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 228 213" fill="none">
      <Path
        d="M149.237 157.191C116.216 286.524 -45.9048 161.1 -68.0053 64.9774C-90.1057 -31.1454 -61.2453 -117.739 24.2087 -152.265C109.663 -186.791 179.467 -129.479 217.161 -54.0902C254.856 21.299 182.259 27.8587 149.237 157.191Z"
        fill="#F2F5FE"
      />
    </Svg>
  )
}

export { BubbleIcon1, BubbleIcon2 }

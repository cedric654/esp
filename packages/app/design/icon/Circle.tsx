import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgCircle(props: SvgProps) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill={props.color}
      ></Path>
    </Svg>
  )
}

export default SvgCircle

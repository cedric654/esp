import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgMenu(props: SvgProps) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill={props.color} />
    </Svg>
  )
}

export default SvgMenu

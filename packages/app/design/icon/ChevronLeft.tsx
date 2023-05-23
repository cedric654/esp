import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgChevronLeft(props: SvgProps) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgChevronLeft

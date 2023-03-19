import { View } from 'app/design'

import { getSpinnerSize, SpinnerView, SpinnerProps } from './spinner-view'

export const Spinner = ({ size, ...rest }: SpinnerProps) => {
  return (
    <View
      style={{
        height: getSpinnerSize(size),
        width: getSpinnerSize(size),
      }}
      tw="animate-spin"
      accessibilityRole="progressbar"
    >
      <SpinnerView size={size} {...rest} />
    </View>
  )
}

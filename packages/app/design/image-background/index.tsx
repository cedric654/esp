import {
  ImageBackground as ReactNativeImageBackground,
  ImageBackgroundProps,
} from 'react-native'

import { styled } from 'app/design/tailwind'
import type { TW } from 'app/design/tailwind'

export type Props = Omit<ImageBackgroundProps, 'tw'> & {
  tw?: TW
}

const StyledImageBackground = styled(ReactNativeImageBackground)

export function ImageBackground({ tw, ...props }: Props) {
  return (
    <StyledImageBackground
      {...props}
      tw={Array.isArray(tw) ? tw.join(' ') : tw}
    />
  )
}

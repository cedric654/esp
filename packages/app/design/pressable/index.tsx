import { Pressable as ReactNativePressable, PressableProps } from 'react-native'

import { styled } from 'app/design/tailwind'
import type { TW } from 'app/design/tailwind'

export type Props = Omit<PressableProps, 'tw'> & {
  tw?: TW
}

const StyledPressable = styled(ReactNativePressable)

export function Pressable({ tw, ...props }: Props) {
  return (
    <StyledPressable {...props} tw={Array.isArray(tw) ? tw.join(' ') : tw} />
  )
}

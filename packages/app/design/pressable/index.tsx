import { Pressable as ReactNativePressable, PressableProps } from 'react-native'

import { styled } from 'app/design/tailwind'
import type { TW } from 'app/design/tailwind'
import { useLink, UseLinkProps } from 'solito/link'

export type Props = UseLinkProps &
  Omit<PressableProps, 'tw'> & {
    tw?: TW
  }

const StyledPressable = styled(ReactNativePressable)

export function Pressable({ tw, ...props }: Props) {
  const linkProps = useLink(props)

  return (
    <StyledPressable
      {...props}
      {...linkProps}
      tw={Array.isArray(tw) ? tw.join(' ') : tw}
    />
  )
}

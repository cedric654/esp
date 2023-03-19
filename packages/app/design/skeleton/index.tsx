import { ComponentProps } from 'react'

import { Skeleton as MotiSkeleton } from 'moti/skeleton'

import { styled } from 'app/design/tailwind'
import type { TW } from 'app/design/tailwind'

type Props = ComponentProps<typeof MotiSkeleton> & {
  tw?: TW
}

const StyledSkeleton = styled(MotiSkeleton)

function Skeleton({ tw, ...props }: Props) {
  return (
    <StyledSkeleton {...props} tw={Array.isArray(tw) ? tw.join(' ') : tw} />
  )
}

Skeleton.displayName = 'Skeleton'

export { Skeleton }

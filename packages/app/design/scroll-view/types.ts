import { ComponentProps } from 'react'
import { ScrollView as ReactNativeScrollView } from 'react-native'

import type { TW } from 'app/design/tailwind'

export type ScrollViewProps = {
  tw?: TW
} & ComponentProps<typeof ReactNativeScrollView>

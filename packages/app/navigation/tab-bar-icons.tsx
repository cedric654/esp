import { Suspense } from 'react'
import { Platform } from 'react-native'

import { useIsDarkMode } from 'app/hooks/use-is-dark-mode'
import HomeFilledIcon from '@material-ui/icons/Home'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import PhotoCameraFilledIcon from '@material-ui/icons/PhotoCamera'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined'
import NotificationsFilledIcon from '@material-ui/icons/Notifications'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import { PressableHover } from 'app/design'
import type { TW } from 'app/design/tailwind'
import { colors } from 'app/design/tailwind'
import { View } from 'app/design'

// import { useNotifications } from 'app/hooks/use-notifications'
import { Link } from 'app/navigation/link'

type TabBarIconProps = {
  color?: string
  focused?: boolean
  tw?: TW
  onPress?: () => void
}

type TabBarButtonProps = {
  tab?: string
  children: React.ReactNode
  tw?: TW
  onPress?: () => void
}

function TabBarIcon({ tab, children, tw, onPress }: TabBarButtonProps) {
  if (Platform.OS === 'web') {
    if (onPress) {
      return (
        <PressableHover
          onPress={onPress}
          tw={[
            'h-12 w-12 items-center justify-center rounded-full md:bg-gray-100 md:dark:bg-gray-900',
            tw ?? '',
          ]}
        >
          {children}
        </PressableHover>
      )
    }
    if (!tab) return null
    return (
      <Link href={tab}>
        <View
          tw={[
            'h-12 w-12 items-center justify-center rounded-full md:bg-gray-100 md:dark:bg-gray-900',
            tw ?? '',
          ]}
        >
          {children}
        </View>
      </Link>
    )
  }

  return <View tw="h-12 w-12 items-center justify-center">{children}</View>
}

export const HomeTabBarIcon = ({ color, focused }: TabBarIconProps) => {
  return (
    <TabBarIcon tab="/">
      {focused ? (
        <HomeFilledIcon
          style={{ zIndex: 1 }}
          width={24}
          height={24}
          htmlColor={color}
        />
      ) : (
        <HomeOutlinedIcon
          style={{ zIndex: 1 }}
          width={24}
          height={24}
          htmlColor={color}
        />
      )}
    </TabBarIcon>
  )
}

export const CamerasTabBarIcon = ({ color, focused }: TabBarIconProps) => {
  return (
    <TabBarIcon tab="/cameras">
      {focused ? (
        <PhotoCameraFilledIcon
          style={{ zIndex: 1 }}
          width={24}
          height={24}
          htmlColor={color}
        />
      ) : (
        <PhotoCameraOutlinedIcon
          style={{ zIndex: 1 }}
          width={24}
          height={24}
          htmlColor={color}
        />
      )}
    </TabBarIcon>
  )
}

export const NotificationsTabBarIcon = ({
  color,
  focused,
  onPress,
}: TabBarIconProps) => {
  return (
    <TabBarIcon tab="/notifications" onPress={onPress}>
      {focused ? (
        <NotificationsFilledIcon
          style={{ zIndex: 1 }}
          width={24}
          height={24}
          htmlColor={color}
        />
      ) : (
        <NotificationsOutlinedIcon
          style={{ zIndex: 1 }}
          width={24}
          height={24}
          htmlColor={color}
        />
      )}
    </TabBarIcon>
  )
}

// const UnreadNotificationIndicator = () => {
//   const { hasUnreadNotification } = useNotifications()

//   return (
//     <View
//       tw="absolute top-2 right-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-violet-500"
//       style={{ opacity: hasUnreadNotification ? 1 : 0 }}
//     />
//   )
// }

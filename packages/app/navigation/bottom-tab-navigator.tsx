import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import dynamic from 'next/dynamic'

import { BottomTabbar } from './bottom-tab-bar'
import {
  HomeTabBarIcon,
  CamerasTabBarIcon,
  NotificationsTabBarIcon,
} from './tab-bar-icons'

const HomeNavigator = dynamic(() => import('app/pages/home'))
const CamerasNavigator = dynamic(() => import('app/pages/cameras'))
const NotificationsNavigator = dynamic(() => import('app/pages/notifications'))

const BottomTab = createBottomTabNavigator()

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="homeTab"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabbar {...props} />}
    >
      <BottomTab.Screen
        name="homeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <BottomTab.Screen
        name="camerasTab"
        component={CamerasNavigator}
        options={{
          tabBarIcon: CamerasTabBarIcon,
        }}
      />
      <BottomTab.Screen
        name="notificationsTab"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: NotificationsTabBarIcon,
        }}
      />
    </BottomTab.Navigator>
  )
}

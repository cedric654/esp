import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import dynamic from 'next/dynamic'

const HomeNavigator = dynamic(() => import('app/pages/home'))
const CamerasNavigator = dynamic(() => import('app/pages/cameras'))
const NotificationsNavigator = dynamic(() => import('app/pages/notifications'))

const BottomTab = createBottomTabNavigator()

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="homeTab"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="homeTab" component={HomeNavigator} />
      <BottomTab.Screen name="camerasTab" component={CamerasNavigator} />
      <BottomTab.Screen
        name="notificationsTab"
        component={NotificationsNavigator}
      />
    </BottomTab.Navigator>
  )
}

import { Tabs } from 'expo-router'
import {
  Bell,
  BellFilled,
  Camera,
  CameraFilled,
  Home,
  HomeFilled,
} from 'app/design/icon'
import { colors } from 'app/lib/constants'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeFilled width={24} height={24} color={color} />
            ) : (
              <Home width={24} height={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="cameras"
        options={{
          title: 'Cameras',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <CameraFilled width={24} height={24} color={color} />
            ) : (
              <Camera width={24} height={24} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <BellFilled width={24} height={24} color={color} />
            ) : (
              <Bell width={24} height={24} color={color} />
            ),
        }}
      />
    </Tabs>
  )
}

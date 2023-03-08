import { Tabs } from 'expo-router'
import { Home, Camera, Bell } from 'app/design/icon'
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
          tabBarIcon: ({ color }) => (
            <Home width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cameras"
        options={{
          title: 'Cameras',
          tabBarIcon: ({ color }) => (
            <Camera width={24} height={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Bell width={24} height={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

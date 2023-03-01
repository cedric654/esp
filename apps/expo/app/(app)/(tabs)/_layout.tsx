import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
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
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cameras"
        options={{
          title: 'Cameras',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="camera" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

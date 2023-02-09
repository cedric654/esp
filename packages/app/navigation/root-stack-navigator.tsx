import { Platform } from 'react-native'
import { BottomTabNavigator } from './bottom-tab-navigator'
import { createStackNavigator } from './create-stack-navigator'
import { RootStackNavigatorParams } from './types'

const Stack = createStackNavigator<RootStackNavigatorParams>()

export function RootStackNavigator() {
  return (
    <Stack.Navigator>
      {/* Bottom tab navigator */}
      <Stack.Screen
        name="bottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

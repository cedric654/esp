import { createStackNavigator } from 'app/navigation/create-stack-navigator'
import { NotificationsStackParams } from 'app/navigation/types'
import NotificationsScreen from 'app/screens/notifications'

const NotificationsStack = createStackNavigator<NotificationsStackParams>()

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="notifications"
        component={NotificationsScreen}
      />
    </NotificationsStack.Navigator>
  )
}

export default NotificationsNavigator

import { createStackNavigator } from 'app/navigation/create-stack-navigator'
import { CamerasStackParams } from 'app/navigation/types'
import { CamerasScreen } from 'app/screens/cameras'

const CamerasStack = createStackNavigator<CamerasStackParams>()

function CamerasNavigator() {
  return (
    <CamerasStack.Navigator>
      <CamerasStack.Screen name="cameras" component={CamerasScreen} />
    </CamerasStack.Navigator>
  )
}

export default CamerasNavigator

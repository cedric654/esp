import { CameraCard } from 'app/components/camera-card'
import { WelcomeHeader } from 'app/components/welcome-header'
import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'

export const HomePage = () => {
  return (
    <SafeAreaView>
      <View tw="my-4 mx-4">
        <WelcomeHeader />
        <Text tw="text-xl font-bold">Caméras actives</Text>
        <CameraCard />
      </View>
    </SafeAreaView>
  )
}

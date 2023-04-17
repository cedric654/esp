import { CameraCard } from 'app/components/camera-card'
import { WelcomeHeader } from 'app/components/welcome-header'
import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'

export const HomePage = () => {
  return (
    <SafeAreaView tw="flex-1">
      <View tw="py-4 px-4 flex-1">
        <WelcomeHeader />
        <View tw="flex-1">
          <Text tw="text-xl font-bold mb-2">Caméras actives</Text>
          <View tw="flex-1 space-y-2">
            <CameraCard isActive={true} uri="" />
            <CameraCard isActive={false} uri="" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

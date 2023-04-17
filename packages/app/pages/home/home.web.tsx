import { BaseLayout } from 'app/components/base-layout'
import { CameraCard } from 'app/components/camera-card'
import { WelcomeHeader } from 'app/components/welcome-header'
import { Text, View } from 'app/design'

export const HomePage = () => {
  return (
    <BaseLayout>
      <WelcomeHeader />
      <View tw="flex-1">
        <Text tw="text-xl font-bold mb-2">Caméras actives</Text>
        <View tw="flex-1 w-full xl:w-2/5 lg:w-full">
          <CameraCard isActive={true} uri="" />
          <CameraCard isActive={false} uri="" />
        </View>
      </View>
    </BaseLayout>
  )
}

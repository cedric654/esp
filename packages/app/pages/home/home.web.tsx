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
        <View tw="flex-1 w-full xl:w-1/2 lg:w-full">
          <CameraCard
            name="Salon"
            isActive={true}
            uri="https://cache.marieclaire.fr/data/photo/w1200_h630_ci/1jv/idees-deco-salon2.jpg"
          />
          <CameraCard name="Garage" isActive={false} uri="htpps://null" />
        </View>
      </View>
    </BaseLayout>
  )
}

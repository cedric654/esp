import { BaseLayout } from 'app/components/base-layout'
import { CameraCard } from 'app/components/camera-card'
import { WelcomeHeader } from 'app/components/welcome-header'
import { Text, View } from 'app/design'
import cameraData from 'app/data/camera-data.json'

export const HomePage = () => {
  const activeCameras = cameraData.filter((camera) => camera.isActive)

  return (
    <BaseLayout>
      <WelcomeHeader />
      <View tw="flex-1">
        <Text tw="text-xl font-bold mb-2">Caméras actives</Text>
        <View tw="w-full h-1/2 lg:w-1/2 xl:h-3/5">
          {activeCameras.map((camera) => (
            <CameraCard
              key={camera.id}
              id={camera.id}
              location={camera.location}
              isActive={camera.isActive}
              lastRecordingTime={camera.lastRecordingTime}
              imageUri={camera.uri}
              clickable={true}
            />
          ))}
        </View>
      </View>
    </BaseLayout>
  )
}

import { CameraCard } from 'app/components/camera-card'
import { WelcomeHeader } from 'app/components/welcome-header'
import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import cameraData from 'app/data/camera-data.json'

export const HomePage = () => {
  const activeCameras = cameraData.filter((camera) => camera.isActive)

  return (
    <SafeAreaView tw="flex-1">
      <View tw="py-4 px-4 flex-1">
        <WelcomeHeader />
        <View tw="flex-1">
          <Text tw="text-xl font-bold mb-2">Caméras actives</Text>
          <View tw="h-1/2 space-y-2">
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
      </View>
    </SafeAreaView>
  )
}

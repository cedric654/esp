import { BaseLayout } from 'app/components/base-layout'
import { Text, View } from 'app/design'
import { CameraPlus } from 'app/design/icon'
import cameraData from 'app/data/camera-data.json'
import { CameraCard } from 'app/components/camera-card'

export const CamerasPage = () => {
  return (
    <BaseLayout>
      <View>
        <View tw="flex-row items-center justify-between">
          <Text tw="text-2xl font-bold mb-2">Caméras</Text>
          <CameraPlus width={24} height={24} color="black" />
        </View>
        {cameraData.map((camera) => (
          <View key={camera.id} tw="h-3/4 lg:h-5/6 xl:w-1/2">
            <CameraCard
              id={camera.id}
              location={camera.location}
              isActive={camera.isActive}
              lastRecordingTime={camera.lastRecordingTime}
              uri={camera.uri}
              clickable={true}
            />
          </View>
        ))}
      </View>
    </BaseLayout>
  )
}

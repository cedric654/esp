import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { CameraPlus } from 'app/design/icon'
import cameraData from 'app/data/camera-data.json'
import { CameraCard } from 'app/components/camera-card'
import { ScrollView } from 'app/design/scroll-view'

export const CamerasPage = () => {
  return (
    <SafeAreaView>
      <View tw="my-4 mx-4">
        <View tw="flex-row items-center justify-between">
          <Text tw="text-2xl font-bold mb-2">Caméras</Text>
          <CameraPlus width={24} height={24} color="black" />
        </View>
        <ScrollView tw="h-full snap-x">
          {cameraData.map((camera) => (
            <View key={camera.id} tw="h-1/2">
              <CameraCard
                id={camera.id}
                location={camera.location}
                isActive={camera.isActive}
                lastRecordingTime={camera.lastRecordingTime}
                imageUri={camera.uri}
                clickable={true}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

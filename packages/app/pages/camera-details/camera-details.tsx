import { CameraCard } from 'app/components/camera-card'
import { Pressable, Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { createParam } from 'solito'
import cameraData from 'app/data/camera-data.json'
import { ChevronLeft, Gear } from 'app/design/icon'

const { useParam } = createParam<{ id: string }>()

export const CameraDetails = () => {
  const [id] = useParam('id')
  const camera = cameraData.find((camera) => camera.location === id)

  return (
    <SafeAreaView tw="flex-1">
      <View tw="py-4 px-4 h-1/2 md:h-3/4 lg:px-36 lg:flex-1">
        <View tw="py-4 mb-2 flex-row items-center justify-between">
          <Pressable
            href="/cameras"
            tw="px-2 py-2 hover:bg-gray-100 rounded-md justify-between"
          >
            <View tw="flex flex-row items-center">
              <ChevronLeft width={24} height={24} color="black" />
              <Text>Retour</Text>
            </View>
          </Pressable>
          <Text>{!camera ? 'Caméra introuvable' : null}</Text>
          <Pressable href="#" tw="px-2 py-2 hover:bg-gray-100 rounded-md">
            <Gear width={24} height={24} color="black" />
          </Pressable>
        </View>
        {camera ? (
          <CameraCard
            id={camera.id}
            location={camera.location}
            isActive={camera.isActive}
            lastRecordingTime={camera.lastRecordingTime}
            imageUri={camera.uri}
            clickable={false}
          />
        ) : null}
      </View>
    </SafeAreaView>
  )
}

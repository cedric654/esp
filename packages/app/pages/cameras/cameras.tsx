import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { CameraPlus } from 'app/design/icon'

export const CamerasPage = () => {
  return (
    <SafeAreaView>
      <View tw="my-4 mx-4">
        <View tw="flex-row items-center justify-between">
          <Text tw="text-2xl font-bold mb-2">Caméras</Text>
          <CameraPlus width={24} height={24} color="black" />
        </View>
        <Text>Liste des caméras</Text>
      </View>
    </SafeAreaView>
  )
}

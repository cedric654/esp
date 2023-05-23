import { BaseLayout } from 'app/components/base-layout'
import { Text, View } from 'app/design'
import { CameraPlus } from 'app/design/icon'

export const CamerasPage = () => {
  return (
    <BaseLayout>
      <View>
        <View tw="flex-row items-center justify-between">
          <Text tw="text-2xl font-bold mb-2">Caméras</Text>
          <CameraPlus width={24} height={24} color="black" />
        </View>
        <Text>Liste des caméras</Text>
      </View>
    </BaseLayout>
  )
}

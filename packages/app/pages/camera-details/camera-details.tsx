import { Image, ImageBackground, Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { createParam } from 'solito'

const { useParam } = createParam<{ id: string; uri: string }>()

export const CameraDetails = () => {
  const [id] = useParam('id')

  return (
    <SafeAreaView tw="flex-1">
      <View tw="py-4 px-4 flex-1 justify-between">
        <View tw="flex-row items-center justify-between">
          <Text>Back</Text>
          <Text>{id}</Text>
          <Text>Options</Text>
        </View>
        <ImageBackground
          source={{
            uri: 'https://cache.marieclaire.fr/data/photo/w1200_h630_ci/1jv/idees-deco-salon2.jpg',
          }}
          alt={'Camera image'}
          resizeMode="contain"
          tw="rounded-lg h-2/3 overflow-hidden"
        />
        <View tw="flex-row justify-center">
          <Text>Controller</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

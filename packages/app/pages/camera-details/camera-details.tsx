import { Image, Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { createParam } from 'solito'

const { useParam } = createParam<{ id: string }>()

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
        <Image
          alt={'Camera image'}
          source={{
            uri: 'https://bebesetmamans.20minutes.fr/images/cwgallery/thumb_7563_cd8ac7843fdedbaede9fdfb328fca6d7.png',
          }}
          resizeMode="contain"
          tw="rounded-lg flex-1"
        />
        <View tw="flex-row justify-center">
          <Text>Controller</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

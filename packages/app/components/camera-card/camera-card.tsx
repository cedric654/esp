import { Image, Pressable, Text, View } from 'app/design'

export const CameraCard = () => {
  return (
    <Pressable tw="bg-gray-200">
      <Image
        alt={'Camera image'}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        tw="rounded-md shadow-lg antialiased"
        width={32}
        height={32}
      />
      <View>
        <Text>Image de la caméra</Text>
      </View>
      <Text></Text>
    </Pressable>
  )
}

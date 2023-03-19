/* eslint-disable react/no-unescaped-entities */
import { Text, View } from 'app/design'
import { Avatar } from 'app/design/avatar'

export const WelcomeHeader = () => {
  return (
    <View tw="flex-col">
      <View tw="flex-row justify-between">
        <View>
          <Text tw="text-2xl font-bold mb-2">Bienvenue, Cédric 👋</Text>
          <Text tw="mb-10 text-gray-500">C'est bon de te revoir</Text>
        </View>
        <Avatar alt={'Profil image'} />
      </View>
    </View>
  )
}

import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'

export const NotificationsPage = () => {
  return (
    <SafeAreaView>
      <View tw="my-4 mx-4">
        <Text tw="text-2xl font-bold mb-2">Notifications</Text>
        <Text>Liste des notifications</Text>
      </View>
    </SafeAreaView>
  )
}

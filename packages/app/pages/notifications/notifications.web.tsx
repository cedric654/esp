import { BaseLayout } from 'app/components/base-layout'
import { Text, View } from 'app/design'

export const NotificationsPage = () => {
  return (
    <BaseLayout>
      <View tw="my-4 mx-4">
        <Text tw="text-2xl font-bold mb-2">Notifications</Text>
        <Text>Aucune notification pour le moment</Text>
      </View>
    </BaseLayout>
  )
}

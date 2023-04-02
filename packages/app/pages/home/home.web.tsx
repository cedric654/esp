import { BaseLayout } from 'app/components/base-layout'
import { WelcomeHeader } from 'app/components/welcome-header'
import { Text, View } from 'app/design'

export const HomePage = () => {
  return (
    <BaseLayout>
      <WelcomeHeader />
      <Text tw="text-xl font-bold">Caméras actives</Text>
      <Text>Liste des caméras</Text>
    </BaseLayout>
  )
}

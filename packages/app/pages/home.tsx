import { Text, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { Spinner } from 'app/design/spinner'

const HomePage = () => {
  return (
    <SafeAreaView>
      <Text tw="text-2xl">Écran accueil mobile</Text>
      <Spinner size="large" />
    </SafeAreaView>
  )
}

export default HomePage

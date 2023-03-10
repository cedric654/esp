import { Button, Text, View } from 'app/design'
import { Spinner } from 'app/design/spinner'

const HomePage = () => {
  return (
    <View>
      <Text tw="text-2xl">Écran accueil web</Text>
      <Spinner size="small" />
    </View>
  )
}

export default HomePage

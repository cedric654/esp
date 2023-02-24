import { Login } from 'app/components/login'
import { View } from 'app/design'
import { H1 } from 'app/design/typography'

const HomeScreen = () => {
  return (
    <View>
      <H1>Home screen</H1>
      <Login />
    </View>
  )
}

export default HomeScreen

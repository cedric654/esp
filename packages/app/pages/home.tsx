import { Login } from 'app/components/login'
import { TextLink, View } from 'app/design'
import { H1 } from 'app/design/typography'

const HomePage = () => {
  return (
    <View>
      <H1>Home screen</H1>
      <TextLink href="/cameras">Regular Link</TextLink>
    </View>
  )
}

export default HomePage

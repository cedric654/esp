import { Button, Text, TextLink, View } from 'app/design'
import { H1 } from 'app/design/typography'

const HomePage = () => {
  return (
    <View>
      <H1>Écran accueil web</H1>
      <TextLink href="/profil">Se dirriger vers le profil</TextLink>
    </View>
  )
}

export default HomePage

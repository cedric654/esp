import { Text, TextLink, View } from 'app/design'
import { SafeAreaView } from 'app/design/safe-area'
import { H1 } from 'app/design/typography'

const HomePage = () => {
  return (
    <SafeAreaView>
      <H1>Écran accueil mobile</H1>
      <TextLink href="/profil">Se dirriger vers le profil</TextLink>
    </SafeAreaView>
  )
}

export default HomePage

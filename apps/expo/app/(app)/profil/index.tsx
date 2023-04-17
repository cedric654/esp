import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function Profil() {
  return (
    <View>
      <Text>Profil screen</Text>
      <Link href="/">Se dirriger vers accueil</Link>
    </View>
  )
}

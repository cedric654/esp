import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home screen</Text>
      <Link href="/profil">Se dirriger vers le profil</Link>
    </View>
  );
}

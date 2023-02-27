import { SafeAreaProvider } from 'app/design/safe-area'
import { Slot } from 'expo-router'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}

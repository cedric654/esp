import { Slot } from 'expo-router'
import { AppProviders } from 'app/providers/app-providers'

export default function RootLayout() {
  return (
    <AppProviders>
      <Slot />
    </AppProviders>
  )
}

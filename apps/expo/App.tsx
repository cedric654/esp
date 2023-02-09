import { RootStackNavigator } from 'app/navigation/root-stack-navigator'
import { AppProviders } from 'app/providers/app-providers'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <AppProviders>
      <StatusBar style="auto" />
      <RootStackNavigator />
    </AppProviders>
  )
}

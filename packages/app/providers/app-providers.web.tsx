import { NavigationProvider } from 'app/navigation'
import { SafeAreaProvider } from '../design/safe-area'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </SafeAreaProvider>
  )
}

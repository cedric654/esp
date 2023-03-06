import { ColorSchemeProvider } from 'app/design/color-scheme'
import { SafeAreaProvider } from 'app/design/safe-area'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColorSchemeProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ColorSchemeProvider>
  )
}

import { SafeAreaProvider } from '../design/safe-area'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>
}

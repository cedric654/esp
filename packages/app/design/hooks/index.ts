import { useColorScheme } from 'app/design/color-scheme'

export const useIsDarkMode = () => {
  const { colorScheme } = useColorScheme()
  return colorScheme === 'dark'
}

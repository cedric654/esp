import { View } from 'app/design'
import { Sidebar } from '../sidebar'

export const BaseLayout = ({ children }) => {
  return (
    <View tw="h-screen flex flex-row justify-start">
      <Sidebar />
      <View tw="flex-1 p-4">{children}</View>
    </View>
  )
}

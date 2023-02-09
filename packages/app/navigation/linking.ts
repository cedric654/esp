import * as Linking from 'expo-linking'
import type { LinkingOptions } from 'app/lib/react-navigation/native'
import { getStateFromPath } from 'app/lib/react-navigation/native'

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    //@ts-ignore
    initialRouteName: 'bottomTabs',
    screens: {
      login: 'login',
      signUp: 'sign-up',
      bottomTabs: {
        initialRouteName: 'homeTab',
        screens: {
          // Bottom Tab Navigator
          homeTab: '',
          camerasTab: 'cameras',
          notificationsTab: 'notifications',
        },
      },
    },
  },
  getStateFromPath(path, config) {
    return getStateFromPath(path, config)
  },
}

export { linking }

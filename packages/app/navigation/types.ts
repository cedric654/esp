import type { NavigatorScreenParams } from '@react-navigation/native'
import type { NextComponentType, NextPageContext } from 'next'

type HomeStackParams = {
  home: undefined
  login: undefined
}

type CamerasStackParams = {
  cameras: undefined
}

type NotificationsStackParams = {
  notifications: undefined
}

type NextPageProps = any
type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>
  pageProps?: NextPageProps
}

type BottomTabNavigatorParams = {
  homeTab: NavigatorScreenParams<HomeStackParams>
  camerasTab: NavigatorScreenParams<CamerasStackParams>
  notificationsTab: NavigatorScreenParams<NotificationsStackParams>
}

type RootStackNavigatorParams = {
  login: undefined
  bottomTabs: BottomTabNavigatorParams
}

export type {
  NextNavigationProps,
  HomeStackParams,
  CamerasStackParams,
  NotificationsStackParams,
  BottomTabNavigatorParams,
  RootStackNavigatorParams,
}

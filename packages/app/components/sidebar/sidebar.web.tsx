import { Button, Pressable, Text, View } from 'app/design'
import { Home, Camera, Bell, Menu } from 'app/design/icon'
import React, { useState, useMemo } from 'react'
import { Link } from 'solito/link'

export const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Accueil', icon: Home, link: '/' },
    { id: 2, label: 'Caméras', icon: Camera, link: '/cameras' },
    { id: 3, label: 'Notifications', icon: Bell, link: '/notifications' },
  ]

  return (
    <View tw="px-8 py-4 ${}">
      <View tw="flex flex-row items-center justify-between pb-8 pl-2">
        <Text tw="flex items-center text-2xl font-bold">Secur</Text>
        <Pressable href="" tw="hover:bg-gray-100 p-1 rounded-md">
          <Menu width={24} height={24} color="black" />
        </Pressable>
      </View>
      <View tw="flex items-center space-y-4">
        <View>
          <View tw="space-y-1">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              return (
                <Pressable
                  key={menu.id}
                  href={menu.link}
                  tw="pl-2 pr-24 py-2 hover:bg-gray-100 rounded-md"
                >
                  <View tw="flex flex-row items-center">
                    <Icon width={24} height={24} color="black" />
                    <Text tw="ml-4">{menu.label}</Text>
                  </View>
                </Pressable>
              )
              // Ajouter les collapse
              // Garder les states
            })}
          </View>
        </View>
      </View>
    </View>
  )
}

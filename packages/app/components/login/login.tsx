import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import React from 'react'

const Login = () => {
  return (
    <View className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <View className="w-full max-w-md space-y-8">
        <H1>Bonjour, </H1>
      </View>
      <P>Se connecter ici</P>
    </View>
  )
}

export { Login }

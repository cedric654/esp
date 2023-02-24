import { A, H1, P, Text } from 'app/design/typography'
import { View, TextLink } from 'app/design'
import React from 'react'

const Login = () => {
  return (
    <View className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <View className="w-full max-w-md space-y-8">
        <H1>Bonjour, </H1>
      </View>
      <P>Test</P>
    </View>
  )
}

export { Login }

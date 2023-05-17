import { ImageBackground, Pressable, Text, View } from 'app/design'
import { Circle } from 'app/design/icon'
import { colors } from 'app/lib/constants'
import { useEffect, useState } from 'react'

type CameraCardProps = {
  name: string
  isActive: boolean
  uri: string
}

export const CameraCard = ({ name, isActive, uri }: CameraCardProps) => {
  const [currentDateTime, setCurrentDateTime] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date()
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }
      const formatted = currentDate.toLocaleString('fr-FR', options)
      setCurrentDateTime(formatted)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Pressable href="/cameras/test" tw="flex-1 mb-4">
      <ImageBackground
        alt={'Camera image'}
        source={{ uri }}
        tw="rounded-lg flex-1 p-3 bg-black overflow-hidden"
        resizeMode="stretch"
      >
        <View tw="flex-1 justify-between">
          <View tw="flex-row items-center justify-between">
            <Text tw="font-bold text-white md:text-lg">{name}</Text>
            <View tw="flex flex-row items-center gap-x-2">
              <Circle
                width={16}
                height={16}
                color={isActive ? colors.green : colors.red}
              />
              <Text tw="font-bold text-white">
                {isActive ? 'En direct' : 'Hors ligne'}
              </Text>
            </View>
          </View>
          <Text tw="self-end text-white">{currentDateTime}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

import { ImageBackground, Pressable, Text, View } from 'app/design'
import { CameraOff, Circle } from 'app/design/icon'
import { colors } from 'app/lib/constants'
import { useEffect, useState } from 'react'

type CameraCardProps = {
  id: number
  location: string
  isActive: boolean
  lastRecordingTime: string
  uri: string
  clickable: boolean
}

export const CameraCard = ({
  id,
  location,
  isActive,
  lastRecordingTime,
  uri,
  clickable,
}: CameraCardProps) => {
  const [currentDateTime, setCurrentDateTime] = useState('')

  const formatDate = () => {
    const currentDate = new Date()

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }

    let formattedDate

    if (isActive) formattedDate = currentDate.toLocaleString('fr-FR', options)
    else
      formattedDate = new Date(lastRecordingTime).toLocaleString(
        'fr-FR',
        options
      )

    return formattedDate
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(formatDate())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Pressable href={clickable ? `/cameras/${location}` : '#'} tw="flex-1 mb-4">
      <ImageBackground
        alt={isActive ? 'Active Camera' : 'Inactive Camera'}
        source={{ uri }}
        tw="rounded-lg flex-1 p-3 bg-black overflow-hidden"
        resizeMode="stretch"
      >
        <View tw="flex-1 justify-between">
          <View tw="flex-row items-center justify-between">
            <Text tw="font-bold text-white md:text-lg">{location}</Text>
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
          {!isActive ? (
            <View tw="flex-row justify-center">
              <CameraOff width={32} height={28} color="white" />
            </View>
          ) : null}
          <Text tw="self-end text-white">
            {isActive
              ? currentDateTime
              : `Dernière heure d'enregistrement : ${formatDate()}`}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

import { ComponentProps, forwardRef } from 'react'
import { Text as NativeText, Platform, Linking, TextStyle } from 'react-native'
import { styled, StyledProps } from 'nativewind'
import { TextLink as SolitoTextLink } from 'solito/link'

export const TextLink = styled<
  ComponentProps<typeof SolitoTextLink> & { style?: TextStyle }
>(function TextLink({ style, textProps, ...props }) {
  return (
    <SolitoTextLink
      textProps={{ ...textProps, style: [style, textProps?.style] }}
      {...props}
    />
  )
}, 'text-base font-bold hover:underline text-blue-500')

import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs'
import {PlatformPressable} from '@react-navigation/elements'
import * as Haptics from 'expo-haptics'
import React from 'react'

export function TabBarButton(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={ev => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
        props.onPressIn?.(ev)
      }}
    />
  )
}

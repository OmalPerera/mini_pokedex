import React, {FC} from 'react'
import {View, StyleSheet} from 'react-native'
import {colors} from '../theme'

interface ProgressBarProps {
  height?: number
  color?: string
  trackColor?: string
  progress?: number
}

export const ProgressBar: FC<ProgressBarProps> = ({
  height = 4,
  color = colors.primary_black,
  trackColor = colors.grey_300,
  progress = 0,
}) => {
  const progressBarWidth = progress * 100

  return (
    <View style={[styles.container, {height, backgroundColor: trackColor}]}>
      <View
        style={[
          styles.progressBar,
          {width: `${progressBarWidth}%`, backgroundColor: color},
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 16,
  },
})

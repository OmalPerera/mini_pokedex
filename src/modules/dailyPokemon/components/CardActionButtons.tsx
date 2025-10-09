import {borderRadii, colors, spacing} from '@/src/ui/theme'
import React, {FC, memo} from 'react'
import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

interface CardActionButtonProps {
  title?: string
  onPress?: () => void
  backgroundColor: ColorValue
  style?: ViewStyle
}

export const CardActionButton: FC<CardActionButtonProps> = memo(
  ({title, onPress, backgroundColor = colors.primary_black, style}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {backgroundColor}, styles.buttonShadow, style]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    )
  },
)

CardActionButton.displayName = 'CardActionButton'

const styles = StyleSheet.create({
  buttonShadow: {
    shadowColor: colors.primary_black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button: {
    width: '80%',
    paddingVertical: spacing.s16,
    borderRadius: borderRadii.r72,
    alignItems: 'center',
    marginTop: spacing.s8,
    marginBottom: spacing.s16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

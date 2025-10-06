import {colors} from '@/src/ui/theme'
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 72,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

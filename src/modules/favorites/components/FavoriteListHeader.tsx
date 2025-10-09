import {colors, spacing} from '@/src/ui/theme'
import {memo} from 'react'
import {StyleSheet, Text} from 'react-native'

interface Props {
  headerTitle?: string
  isVisible?: boolean
}

export const FavoriteListHeader = memo(({headerTitle, isVisible}: Props) => {
  return isVisible ? <Text style={styles.headerText}>{headerTitle}</Text> : null
})

FavoriteListHeader.displayName = 'FavoriteListHeader'

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginVertical: spacing.s20,
  },
})

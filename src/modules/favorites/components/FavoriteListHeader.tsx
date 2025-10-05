import {colors} from '@/src/ui/theme'
import {memo} from 'react'
import {StyleSheet, Text} from 'react-native'

interface Props {
  headerTitle?: string
}

export const FavoriteListHeader = memo(({headerTitle}: Props) => {
  return <Text style={styles.headerText}>{headerTitle}</Text>
})

FavoriteListHeader.displayName = 'FavoriteListHeader'

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginVertical: 20,
  },
})

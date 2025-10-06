import {AnimatedFavoriteIcon} from '@/src/ui/components'
import {colors} from '@/src/ui/theme'
import {Ionicons} from '@expo/vector-icons'
import React, {FC, memo} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface Props {
  headerTitle?: string
  isFavorite?: boolean
  onPressFavorite?: () => void
}

export const CardHeaderSection: FC<Props> = memo(
  ({headerTitle, isFavorite, onPressFavorite}) => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{headerTitle}</Text>
        <AnimatedFavoriteIcon
          isFavorite={isFavorite}
          onPressFavorite={onPressFavorite}
          size={32}
        />
      </View>
    )
  },
)

CardHeaderSection.displayName = 'CardHeaderSection'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue_900,
  },
})

import { colors } from '@/src/ui/theme'
import { Ionicons } from '@expo/vector-icons'
import React, { FC, memo } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  headerTitle?: string;
  isFavorite?: boolean;
  onPressFavorite?: () => void;
}

export const CardHeaderSection: FC<Props> = memo(
  ({ headerTitle, isFavorite, onPressFavorite }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{headerTitle}</Text>
        <TouchableOpacity hitSlop={24} onPress={onPressFavorite}>
          {isFavorite ? (
            <Ionicons name="heart" size={26} color={colors.red_700} />
          ) : (
            <Ionicons name="heart-outline" size={26} color={colors.grey_950} />
          )}
        </TouchableOpacity>
      </View>
    )
  }
)

CardHeaderSection.displayName = 'CardHeaderSection'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.grey_950,
  },
})

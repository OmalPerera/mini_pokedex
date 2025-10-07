import React, {FC} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {borderRadii, colors, spacing} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {AnimatedFavoriteIcon} from './AnimatedFavoriteIcon'

interface Props {
  name?: string
  image?: string
  type?: string
  isFavorite?: boolean
  onPressFavorite?: () => void
  onPressItem?: () => void
}

export const ListItemCard: FC<Props> = ({
  name,
  image,
  type,
  isFavorite,
  onPressFavorite,
  onPressItem,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card]}
      onPress={onPressItem}
      activeOpacity={0.8}>
      <Image source={{uri: image}} style={styles.pokemonImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <AnimatedFavoriteIcon
        isFavorite={isFavorite}
        onPressFavorite={onPressFavorite}
        size={32}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: setOpacity(colors.primary_white)(0.8),
    borderRadius: borderRadii.r16,
    paddingVertical: spacing.s8,
    paddingStart: spacing.s16,
    paddingEnd: spacing.s20,
    marginVertical: spacing.s8,
    shadowColor: colors.primary_black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: borderRadii.r8,
  },
  pokemonImage: {
    width: 80,
    height: 80,
    marginRight: spacing.s16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: spacing.s2,
  },
  type: {
    fontSize: 16,
    color: colors.grey_700,
  },
})

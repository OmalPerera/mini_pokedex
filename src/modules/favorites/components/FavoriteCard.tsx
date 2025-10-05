import React, {FC} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {colors} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {FavoriteIcon} from '@/assets/svg/FavoriteIcon'

interface Props {
  name?: string
  image?: string
  type?: string
  isFavorite?: boolean
  onPressFavorite?: () => void
  onPressItem?: () => void
}

export const FavoriteCard: FC<Props> = ({
  name,
  image,
  type,
  isFavorite,
  onPressFavorite,
  onPressItem,
}) => {
  return (
    <TouchableOpacity style={[styles.card]} onPress={onPressItem}>
      <Image source={{uri: image}} style={styles.pokemonImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <TouchableOpacity
        onPress={onPressFavorite}
        hitSlop={20}
        style={styles.favoriteButton}>
        <FavoriteIcon isFocused={isFavorite} size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: setOpacity(colors.primary_white)(0.8),
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 6,
    shadowColor: colors.primary_black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  pokemonImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary_black,
    marginBottom: 2,
  },
  type: {
    fontSize: 16,
    color: colors.grey_700,
  },
  favoriteButton: {
    padding: 8,
  },
})

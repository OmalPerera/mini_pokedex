import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {colors} from '@/src/ui/theme'

interface Props {
  name: string
  imageUrl: string
  onPress: () => void
}

export const PopularPokemonCard = ({name, imageUrl, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.imgBg}>
        <Image source={{uri: imageUrl}} style={styles.pokemonImage} />
      </View>
      <Text style={styles.pokemonName}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.primary_white,
    borderRadius: 16,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 6,
    marginHorizontal: 6,
  },
  imgBg: {
    backgroundColor: colors.grey_300,
    borderRadius: 12,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonImage: {
    width: 60,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  pokemonName: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blue_900,
    textAlign: 'center',
  },
})

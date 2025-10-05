import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {colors} from '@/src/ui/theme'

interface Props {
  name: string
  imageUrl: string
}

export function PopularPokemonCard({name, imageUrl}: Props) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageUrl}} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: colors.primary_white,
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  pokemonImage: {
    width: 80,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  pokemonName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blue_900,
    textAlign: 'center',
  },
})

import React from 'react'
import {StyleSheet, Text, FlatList} from 'react-native'
import {PopularPokemonCard} from './PopularPokemonCard'
import Animated from 'react-native-reanimated'

interface PokemonData {
  id: string
  name: string
  imageUrl: string
  type?: string
}

const DUMMY_POKEMON_DATA: PokemonData[] = [
  {
    id: '1',
    name: 'Búbémon',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: '2',
    name: 'Pludd',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: '3',
    name: 'Prings',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: '4',
    name: 'Caach Ater',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: '5',
    name: 'Mox Cnay',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: '6',
    name: 'Bat Cunep',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
]

interface Props {
  isVisible?: boolean
}

export const PopularPokemonSection = ({isVisible}: Props) => {
  return isVisible ? (
    <Animated.View style={styles.container}>
      <Text style={styles.title}>Popular Pokémon</Text>
      <FlatList
        data={DUMMY_POKEMON_DATA}
        renderItem={({item}) => (
          <PopularPokemonCard name={item.name} imageUrl={item.imageUrl} />
        )}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </Animated.View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
})

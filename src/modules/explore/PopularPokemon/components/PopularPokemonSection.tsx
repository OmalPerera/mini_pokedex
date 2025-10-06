import React from 'react'
import {StyleSheet, Text, FlatList} from 'react-native'
import {PopularPokemonCard} from './PopularPokemonCard'
import Animated from 'react-native-reanimated'
import {PokemonDetailsFragment} from '@/src/api/queries/pokemon.generated'
import {pickRandomItemsFromArray} from '@/src/utils'
import {colors} from '@/src/ui/theme'

interface Props {
  isVisible?: boolean
  data?: PokemonDetailsFragment[]
  onPressItem: (item: PokemonDetailsFragment) => void
}

export const PopularPokemonSection = ({
  isVisible,
  data,
  onPressItem,
}: Props) => {
  const randomPokemons = pickRandomItemsFromArray(data, 8)
  return isVisible ? (
    <Animated.View style={styles.container}>
      <Text style={styles.title}>Popular Pokémon</Text>
      <FlatList
        data={randomPokemons}
        renderItem={({item}) => (
          <PopularPokemonCard
            name={item.name}
            imageUrl={item.pokemonsprites[0].artwork.toString()}
            onPress={() => onPressItem(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
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
    color: colors.blue_900,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
})

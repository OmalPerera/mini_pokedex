import {AppHeader} from '@/src/ui/components/AppHeader'
import {GradientBackground} from '@/src/ui/components/GradientBackground'
import React, {FC} from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {FavoriteCard} from './components'
import {MainTabScreenProps} from '@/src/navigation/types'

export const FavoritesScreen: FC<MainTabScreenProps<'Favorites'>> = ({
  navigation,
}) => {
  const mockPokemonData = [
    {
      id: 1,
      name: 'Bubémon',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      type: 'Grass/Poison',
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      type: 'Water',
      isFavorite: true,
    },
    {
      id: 3,
      name: 'Charmendr',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      type: 'Fire',
      isFavorite: true,
    },
  ]

  const handlePressFavorite = (id: number) => {
    console.log(`Toggle favorite for Pokémon with ID: ${id}`)
  }

  const handlePressItem = (id: number) => {
    navigation.navigate('PokemonDetailScreen', {
      id,
    })
  }

  return (
    <GradientBackground>
      <AppHeader />
      <FlatList
        contentContainerStyle={styles.listViewStyles}
        data={mockPokemonData}
        renderItem={({item}) => (
          <FavoriteCard
            name={item.name}
            image={item.image}
            type={item.type}
            isFavorite={item.isFavorite}
            onPressFavorite={() => handlePressFavorite(item.id)}
            onPressItem={() => handlePressItem(item.id)}
          />
        )}
      />
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  listViewStyles: {
    padding: 16,
  },
})

import {AppHeader} from '@/src/ui/components/AppHeader'
import {GradientBackground} from '@/src/ui/components/GradientBackground'
import React, {FC} from 'react'
import {FlatList, StyleSheet, Text} from 'react-native'
import {FavoriteCard, FavoriteListHeader} from './components'
import {MainTabScreenProps} from '@/src/navigation/types'
import {observer} from 'mobx-react-lite'
import {pokedexStore} from '@/src/store/pokedex.store'
import {formatPokemonForUI} from '@/src/utils'

export const FavoritesScreen: FC<MainTabScreenProps<'Favorites'>> = observer(
  ({navigation}) => {
    const favoriteList = pokedexStore.getFavoriteList()

    const formattedFavoriteList = favoriteList?.map(item =>
      formatPokemonForUI(item),
    )

    const handlePressFavorite = (id: number) => {
      pokedexStore.removeFromFavorites(id)
    }

    const handlePressItem = (id: number) => {
      const item = favoriteList?.find(item => item.id === id)
      navigation.navigate('PokemonDetailScreen', {
        id,
        details: item,
      })
    }

    return (
      <GradientBackground>
        <AppHeader />
        <FlatList
          contentContainerStyle={styles.listViewStyles}
          data={formattedFavoriteList}
          ListHeaderComponent={<FavoriteListHeader headerTitle="Favorites" />}
          renderItem={({item}) => (
            <FavoriteCard
              name={item.name}
              image={item.image}
              type={item.type}
              isFavorite={true}
              onPressFavorite={() => handlePressFavorite(item.id)}
              onPressItem={() => handlePressItem(item.id)}
            />
          )}
        />
      </GradientBackground>
    )
  },
)

const styles = StyleSheet.create({
  listViewStyles: {
    padding: 16,
  },
})

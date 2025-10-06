import {
  AppHeader,
  GradientBackground,
  ListItemCard,
  SearchBox,
} from '@/src/ui/components'
import React from 'react'
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import {PopularPokemonSection} from './PopularPokemon/components/PopularPokemonSection'
import {MainTabScreenProps} from '@/src/navigation'
import {observer} from 'mobx-react-lite'
import {getPokedexStore} from '@/src/store/pokedex.store'
import {useTogglePokemonFavorite} from '../common/hooks'
import {usePokemonSearch} from '../common/hooks/usePokemonSearch'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export const ExploreScreen = observer(
  ({navigation}: MainTabScreenProps<'Explore'>) => {
    const {bottom} = useSafeAreaInsets()

    const {searchString, setSearchString, handleLoadMore, data, loading} =
      usePokemonSearch()

    const favoriteItemsIds = getPokedexStore().getFavoriteItemsIds()

    const {toggleFavorite} = useTogglePokemonFavorite()

    const handlePressItem = (id: number) => {
      navigation.navigate('PokemonDetailScreen', {
        id,
        details: data?.pokemon.find(item => item.id === id),
      })
    }

    const handlePressFavorite = (id: number) => {
      toggleFavorite({
        isFavorite: favoriteItemsIds.includes(id),
        details: data?.pokemon.find(item => item.id === id),
      })
    }

    return (
      <GradientBackground>
        <AppHeader />
        <SearchBox style={styles.searchBoxStyles} onSearch={setSearchString} />
        <FlatList
          contentContainerStyle={[
            styles.listViewStyles,
            {paddingBottom: bottom},
          ]}
          data={data?.pokemon}
          ListHeaderComponent={
            <PopularPokemonSection isVisible={!Boolean(searchString)} />
          }
          renderItem={({item}) => (
            <ListItemCard
              name={item.name}
              image={item.pokemonsprites[0].artwork.toString()}
              onPressItem={() => handlePressItem(item.id)}
              isFavorite={favoriteItemsIds.includes(item.id)}
              onPressFavorite={() => handlePressFavorite(item.id)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading && searchString ? (
              <ActivityIndicator style={styles.loadingIndicator} />
            ) : null
          }
        />
      </GradientBackground>
    )
  },
)

const styles = StyleSheet.create({
  listViewStyles: {
    padding: 16,
  },
  searchBoxStyles: {
    marginHorizontal: 16,
    marginTop: 28,
    marginBottom: 8,
  },
  loadingIndicator: {
    marginVertical: 20,
    alignSelf: 'center',
    color: 'white',
  },
})

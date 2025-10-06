import {
  AppHeader,
  GradientBackground,
  ListItemCard,
  SearchBox,
} from '@/src/ui/components'
import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import {PopularPokemonSection} from './PopularPokemon/components/PopularPokemonSection'
import {useSearchPokemonsLazyQuery} from '@/src/api/queries/pokemon.operations.generated'
import {colors} from '@/src/ui/theme'
import {MainTabScreenProps} from '@/src/navigation'
import {observer} from 'mobx-react-lite'
import {pokedexStore} from '@/src/store/pokedex.store'
import {useTogglePokemonFavorite} from '../common/hooks'

const PAGINATION_LIMIT = 20
export const ExploreScreen = observer(
  ({navigation}: MainTabScreenProps<'Explore'>) => {
    const [searchString, setSearchString] = useState('')

    const [offset, setOffset] = useState(0)

    const favoriteItemsIds = pokedexStore.getFavoriteItemsIds()

    const {toggleFavorite} = useTogglePokemonFavorite()

    const [searchPokemon, {data, loading, fetchMore}] =
      useSearchPokemonsLazyQuery()

    useEffect(() => {
      searchPokemon({
        variables: {
          q: `%${searchString}%`,
          limit: PAGINATION_LIMIT,
          offset: 0,
        },
      })
      setOffset(0)
    }, [searchString, searchPokemon])

    const handleLoadMore = () => {
      if (loading) {
        return
      }

      const newOffset = offset + PAGINATION_LIMIT
      fetchMore({
        variables: {
          q: `%${searchString}%`,
          limit: PAGINATION_LIMIT,
          offset: newOffset,
        },
        updateQuery: (prev, {fetchMoreResult}) => {
          if (!fetchMoreResult) {
            return prev
          }
          return {
            ...prev,
            pokemon: [...prev.pokemon, ...fetchMoreResult.pokemon],
          }
        },
      })
      setOffset(newOffset)
    }

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
          contentContainerStyle={styles.listViewStyles}
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
    color: colors.primary_white,
  },
})

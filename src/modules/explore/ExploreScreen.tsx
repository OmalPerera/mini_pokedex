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
import {formatPokemonForUI} from '@/src/utils'
import * as Haptics from 'expo-haptics'
import {PokemonDetailsFragment} from '@/src/api/queries/pokemon.generated'
import {colors, spacing} from '@/src/ui/theme'

export const ExploreScreen = observer(
  ({navigation}: MainTabScreenProps<'Explore'>) => {
    const {bottom} = useSafeAreaInsets()

    const {searchString, setSearchString, handleLoadMore, data, loading} =
      usePokemonSearch()

    const favoriteItemsIds = getPokedexStore().getFavoriteItemsIds()

    const popularPokemons = getPokedexStore().getPopularPokemons()

    const {toggleFavorite} = useTogglePokemonFavorite()

    const handlePressItem = (item: PokemonDetailsFragment) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

      navigation.navigate('PokemonDetailScreen', {
        id: item.id,
        details: item,
      })
    }

    const handlePressFavorite = (item: PokemonDetailsFragment) => {
      toggleFavorite({
        isFavorite: favoriteItemsIds.includes(item.id),
        details: item,
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
          data={searchString ? data?.pokemon : popularPokemons}
          ListHeaderComponent={
            <PopularPokemonSection
              isVisible={!Boolean(searchString)}
              data={popularPokemons}
              onPressItem={handlePressItem}
            />
          }
          renderItem={({item}) => {
            const formattedItem = formatPokemonForUI(item)
            return (
              <ListItemCard
                name={formattedItem.name}
                image={formattedItem.image}
                type={formattedItem.type}
                onPressItem={() => handlePressItem(item)}
                isFavorite={favoriteItemsIds.includes(item.id)}
                onPressFavorite={() => handlePressFavorite(item)}
              />
            )
          }}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => data?.pokemon && handleLoadMore()}
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
    padding: spacing.s16,
  },
  searchBoxStyles: {
    marginHorizontal: spacing.s16,
    marginTop: spacing.s28,
    marginBottom: spacing.s8,
  },
  loadingIndicator: {
    marginVertical: spacing.s20,
    alignSelf: 'center',
    color: colors.primary_white,
  },
})

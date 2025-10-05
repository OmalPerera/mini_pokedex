import {AppHeader} from '@/src/ui/components/AppHeader'
import {GradientBackground} from '@/src/ui/components/GradientBackground'
import React, {FC} from 'react'
import {StyleSheet} from 'react-native'
import {FavoriteListEmptyView, FavoriteListHeader} from './components'
import {MainTabScreenProps} from '@/src/navigation/types'
import {observer} from 'mobx-react-lite'
import {pokedexStore} from '@/src/store/pokedex.store'
import {formatPokemonForUI} from '@/src/utils'
import Animated, {LinearTransition} from 'react-native-reanimated'
import * as Haptics from 'expo-haptics'
import {useTogglePokemonFavorite} from '../common/hooks'
import {ListItemCard} from '@/src/ui/components'

export const FavoritesScreen: FC<MainTabScreenProps<'Favorites'>> = observer(
  ({navigation}) => {
    const favoriteList = pokedexStore.getFavoriteList()

    const {toggleFavorite} = useTogglePokemonFavorite()

    const listItemAnimation = LinearTransition.springify().damping(85)

    const formattedFavoriteList = favoriteList?.map(item =>
      formatPokemonForUI(item),
    )

    const handlePressFavorite = (id: number) => {
      const item = favoriteList?.find(item => item.id === id)
      toggleFavorite({
        isFavorite: true,
        details: item,
      })
    }

    const handlePressItem = (id: number) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
      const item = favoriteList?.find(item => item.id === id)
      navigation.navigate('PokemonDetailScreen', {
        id,
        details: item,
      })
    }
    const handlePressFindPokemons = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
      navigation.navigate('Explore')
    }

    return (
      <GradientBackground>
        <AppHeader />
        <Animated.FlatList
          itemLayoutAnimation={listItemAnimation}
          contentContainerStyle={styles.listViewStyles}
          data={formattedFavoriteList?.reverse()}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <FavoriteListHeader
              headerTitle="Favorites"
              isVisible={Boolean(formattedFavoriteList?.length)}
            />
          }
          ListEmptyComponent={
            <FavoriteListEmptyView
              onFindPokemonsPress={handlePressFindPokemons}
            />
          }
          renderItem={({item}) => (
            <ListItemCard
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

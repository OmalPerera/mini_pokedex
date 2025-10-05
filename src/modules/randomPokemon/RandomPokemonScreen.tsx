import {AppHeader, GradientBackground} from '@/src/ui/components'
import * as Haptics from 'expo-haptics'
import React, {FC, useEffect, useMemo} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import type {MainTabScreenProps} from '../../navigation/types'
import {useGetPokemonByIdLazyQuery} from './api/dailyPokemon.operations.generated'
import {CreatureCard} from './components'
import {getRandomInt} from './utils/getRandomId'
import {pokedexStore} from '@/src/store/pokedex.store'
import {observer} from 'mobx-react-lite'
import {formatPokemonForUI} from '@/src/utils'
import {useTogglePokemonFavorite} from '../common/hooks'

export const RandomPokemonScreen: FC<MainTabScreenProps<'Random'>> = observer(
  ({navigation}) => {
    const favoriteItemsIds = pokedexStore.getFavoriteItemsIds()

    const {toggleFavorite} = useTogglePokemonFavorite()

    const [fetchPokemonById, {data, loading, error}] =
      useGetPokemonByIdLazyQuery()

    const doFetchRandomPokemon = () => {
      const randomId = getRandomInt()
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
      fetchPokemonById({
        variables: {
          where: {id: {_eq: randomId}},
        },
      })
    }

    useEffect(() => {
      doFetchRandomPokemon()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const pokemonInfo = useMemo(() => {
      return formatPokemonForUI(data?.pokemon[0])
    }, [data])

    const isFavorite = useMemo(
      () => favoriteItemsIds.includes(pokemonInfo?.id || 0),
      [favoriteItemsIds, pokemonInfo?.id],
    )

    const handlePressLearnMore = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
      navigation.navigate('PokemonDetailScreen', {
        id: pokemonInfo?.id || 1,
        details: data?.pokemon[0],
      })
    }

    const handlePressFavorite = () => {
      toggleFavorite({isFavorite, details: data?.pokemon[0]})
    }

    return (
      <GradientBackground>
        <AppHeader />
        <ScrollView contentContainerStyle={styles.content}>
          <CreatureCard
            name={pokemonInfo?.name}
            image={pokemonInfo?.image}
            isFavorite={isFavorite}
            type={pokemonInfo?.type}
            onPressFavorite={handlePressFavorite}
            onPressLearnMore={handlePressLearnMore}
            onPressAnotherOne={doFetchRandomPokemon}
          />
        </ScrollView>
      </GradientBackground>
    )
  },
)

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

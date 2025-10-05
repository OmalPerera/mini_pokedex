import {AppHeader, GradientBackground} from '@/src/ui/components'
import * as Haptics from 'expo-haptics'
import React, {FC, useEffect, useMemo} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import type {MainTabScreenProps} from '../../navigation/types'
import {useGetPokemonByIdLazyQuery} from './api/dailyPokemon.operations.generated'
import {CreatureCard} from './components'
import {getRandomInt} from './utils/getRandomId'
import {pokedexStore} from '@/src/store/pokedex.store'

export const RandomPokemonScreen: FC<MainTabScreenProps<'Random'>> = ({
  navigation,
}) => {
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
    const _pokemon = data?.pokemon[0]

    if (!_pokemon) {
      return null
    }
    return {
      id: _pokemon.id,
      name: _pokemon.name,
      image: _pokemon.pokemonsprites[0].artwork || '',
      type: _pokemon.pokemontypes[0]?.type?.typenames[0]?.name,
    }
  }, [data])

  const handlePressLearnMore = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    navigation.navigate('PokemonDetailScreen', {
      id: pokemonInfo?.id || 1,
      details: data?.pokemon[0],
    })
  }

  const handlePressFavorite = () => {
    pokedexStore.addToFavorites(data?.pokemon[0])
  }

  return (
    <GradientBackground>
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <CreatureCard
          name={pokemonInfo?.name}
          image={pokemonInfo?.image.toString()}
          isFavorite={false}
          type={pokemonInfo?.type}
          onPressFavorite={handlePressFavorite}
          onPressLearnMore={handlePressLearnMore}
          onPressAnotherOne={doFetchRandomPokemon}
        />
      </ScrollView>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

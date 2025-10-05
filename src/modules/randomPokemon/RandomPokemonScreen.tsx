import {AppHeader, GradientBackground} from '@/src/ui/components'
import React, {FC, useEffect, useMemo} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import type {MainTabScreenProps} from '../../navigation/types'
import {useGetPokemonSpeciesLazyQuery} from './api/randomPokemon.operarions.generated'
import {CreatureCard} from './components'
import {getRandomInt} from './utils/getRandomId'

export const RandomPokemonScreen: FC<MainTabScreenProps<'Random'>> = () => {
  const {bottom} = useSafeAreaInsets()

  const [fetchRandomPokemon, {data, loading, error}] =
    useGetPokemonSpeciesLazyQuery()

  const doFetchRandomPokemon = () => {
    const randomId = getRandomInt()
    fetchRandomPokemon({
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
    const _pokemon = data?.pokemonspecies[0]
    if (!_pokemon) {
      return null
    }
    return {
      id: _pokemon.id,
      name: _pokemon.name,
      generation: _pokemon.generation?.name,
      image: _pokemon.pokemons[0].pokemonsprites[0].artwork || '',
      type: _pokemon.pokemons[0].pokemontypes[0].type?.name,
    }
  }, [data])

  return (
    <GradientBackground style={{paddingBottom: bottom}}>
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <CreatureCard
          name={pokemonInfo?.name}
          image={pokemonInfo?.image.toString()}
          isFavorite={false}
          type={pokemonInfo?.type}
          onPressLearnMore={() => console.log('Learn More Pressed')}
          onPressFavorite={() => console.log('Favorite Pressed')}
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

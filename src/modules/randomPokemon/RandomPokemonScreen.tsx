import {AppHeader, GradientBackground} from '@/src/ui/components'
import React, {FC, useEffect, useMemo} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import type {MainTabScreenProps} from '../../navigation/types'
import {useGetPokemonByIdLazyQuery} from './api/randomPokemon.operations.generated'
import {CreatureCard} from './components'
import {getRandomInt} from './utils/getRandomId'

export const RandomPokemonScreen: FC<MainTabScreenProps<'Random'>> = ({
  navigation,
}) => {
  const {bottom} = useSafeAreaInsets()

  const [fetchPokemonById, {data, loading, error}] =
    useGetPokemonByIdLazyQuery()

  const doFetchRandomPokemon = () => {
    const randomId = getRandomInt()
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
      type: _pokemon.pokemontypes[0].type?.name,
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
          onPressFavorite={() => console.log('Favorite Pressed')}
          onPressLearnMore={() => navigation.navigate('PokemonDetailScreen')}
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

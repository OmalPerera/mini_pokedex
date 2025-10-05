import * as Types from '../../../api/types'

import {gql} from '@apollo/client'
export type PokemonTypeFragment = {
  __typename?: 'pokemontype'
  type?: {__typename?: 'type'; name: string}
}

export type PokemonFragment = {
  __typename?: 'pokemon'
  pokemontypes: Array<{
    __typename?: 'pokemontype'
    type?: {__typename?: 'type'; name: string}
  }>
  pokemonsprites: Array<{
    __typename?: 'pokemonsprites'
    artwork: Record<string, unknown>
  }>
}

export const PokemonTypeFragmentDoc = gql`
  fragment PokemonTypeFragment on pokemontype {
    type {
      name
    }
  }
`
export const PokemonFragmentDoc = gql`
  fragment PokemonFragment on pokemon {
    pokemontypes {
      ...PokemonTypeFragment
    }
    pokemonsprites(limit: 1) {
      artwork: sprites(path: "other.official-artwork.front_default")
    }
  }
  ${PokemonTypeFragmentDoc}
`

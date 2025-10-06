
import {gql} from '@apollo/client'
export type BasicInfoFragment = {
  __typename?: 'pokemon'
  id: number
  name: string
  height?: number
  weight?: number
}

export type PokemonImageFragment = {
  __typename?: 'pokemonsprites'
  artwork: Record<string, unknown>
}

export type PokemonTypesFragment = {
  __typename?: 'pokemontype'
  type?: {
    __typename?: 'type'
    name: string
    typenames: Array<{__typename?: 'typename'; name: string}>
  }
}

export type StatsFragment = {
  __typename?: 'pokemonstat'
  base_stat: number
  effort: number
  stat?: {
    __typename?: 'stat'
    statnames: Array<{__typename?: 'statname'; name: string}>
  }
}

export type MoveFragment = {
  __typename?: 'pokemonmove'
  move?: {
    __typename?: 'move'
    name: string
    accuracy?: number
    power?: number
    pp?: number
    priority?: number
    movenames: Array<{__typename?: 'movename'; name: string}>
  }
}

export type SpeciesFragment = {
  __typename?: 'pokemonspecies'
  id: number
  name: string
  evolution_chain_id?: number
  evolves_from_species_id?: number
  pokemoncolor?: {__typename?: 'pokemoncolor'; name: string}
  pokemonspeciesflavortexts: Array<{
    __typename?: 'pokemonspeciesflavortext'
    flavor_text: string
  }>
  evolutionchain?: {
    __typename?: 'evolutionchain'
    id: number
    pokemonspecies: Array<{
      __typename?: 'pokemonspecies'
      id: number
      name: string
      evolves_from_species_id?: number
      pokemonspeciesnames: Array<{
        __typename?: 'pokemonspeciesname'
        name: string
      }>
      pokemons: Array<{
        __typename?: 'pokemon'
        id: number
        name: string
        pokemonsprites: Array<{
          __typename?: 'pokemonsprites'
          artwork: Record<string, unknown>
        }>
      }>
    }>
  }
}

export type PokemonDetailsFragment = {
  __typename?: 'pokemon'
  id: number
  name: string
  height?: number
  weight?: number
  pokemonsprites: Array<{
    __typename?: 'pokemonsprites'
    artwork: Record<string, unknown>
  }>
  pokemontypes: Array<{
    __typename?: 'pokemontype'
    type?: {
      __typename?: 'type'
      name: string
      typenames: Array<{__typename?: 'typename'; name: string}>
    }
  }>
  pokemonstats: Array<{
    __typename?: 'pokemonstat'
    base_stat: number
    effort: number
    stat?: {
      __typename?: 'stat'
      statnames: Array<{__typename?: 'statname'; name: string}>
    }
  }>
  pokemonmoves: Array<{
    __typename?: 'pokemonmove'
    move?: {
      __typename?: 'move'
      name: string
      accuracy?: number
      power?: number
      pp?: number
      priority?: number
      movenames: Array<{__typename?: 'movename'; name: string}>
    }
  }>
  pokemonspecy?: {
    __typename?: 'pokemonspecies'
    id: number
    name: string
    evolution_chain_id?: number
    evolves_from_species_id?: number
    pokemoncolor?: {__typename?: 'pokemoncolor'; name: string}
    pokemonspeciesflavortexts: Array<{
      __typename?: 'pokemonspeciesflavortext'
      flavor_text: string
    }>
    evolutionchain?: {
      __typename?: 'evolutionchain'
      id: number
      pokemonspecies: Array<{
        __typename?: 'pokemonspecies'
        id: number
        name: string
        evolves_from_species_id?: number
        pokemonspeciesnames: Array<{
          __typename?: 'pokemonspeciesname'
          name: string
        }>
        pokemons: Array<{
          __typename?: 'pokemon'
          id: number
          name: string
          pokemonsprites: Array<{
            __typename?: 'pokemonsprites'
            artwork: Record<string, unknown>
          }>
        }>
      }>
    }
  }
}

export const BasicInfoFragmentDoc = gql`
  fragment BasicInfoFragment on pokemon {
    id
    name
    height
    weight
  }
`
export const PokemonImageFragmentDoc = gql`
  fragment PokemonImageFragment on pokemonsprites {
    artwork: sprites(path: "other.official-artwork.front_default")
  }
`
export const PokemonTypesFragmentDoc = gql`
  fragment PokemonTypesFragment on pokemontype {
    type {
      name
      typenames(where: {language_id: {_eq: 9}}) {
        name
      }
    }
  }
`
export const StatsFragmentDoc = gql`
  fragment StatsFragment on pokemonstat {
    base_stat
    effort
    stat {
      statnames(where: {language_id: {_eq: 9}}) {
        name
      }
    }
  }
`
export const MoveFragmentDoc = gql`
  fragment MoveFragment on pokemonmove {
    move {
      name
      accuracy
      power
      pp
      priority
      movenames(where: {language_id: {_eq: 9}}) {
        name
      }
    }
  }
`
export const SpeciesFragmentDoc = gql`
  fragment SpeciesFragment on pokemonspecies {
    id
    name
    evolution_chain_id
    evolves_from_species_id
    pokemoncolor {
      name
    }
    pokemonspeciesflavortexts(limit: 1, where: {language_id: {_eq: 9}}) {
      flavor_text
    }
    evolutionchain {
      id
      pokemonspecies(order_by: {id: asc}) {
        id
        name
        pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
          name
        }
        evolves_from_species_id
        pokemons(limit: 1) {
          id
          name
          pokemonsprites {
            artwork: sprites(path: "other.official-artwork.front_default")
          }
        }
      }
    }
  }
`
export const PokemonDetailsFragmentDoc = gql`
  fragment PokemonDetailsFragment on pokemon {
    ...BasicInfoFragment
    pokemonsprites {
      ...PokemonImageFragment
    }
    pokemontypes {
      ...PokemonTypesFragment
    }
    pokemonstats {
      ...StatsFragment
    }
    pokemonmoves(limit: 10) {
      ...MoveFragment
    }
    pokemonspecy {
      ...SpeciesFragment
    }
  }
  ${BasicInfoFragmentDoc}
  ${PokemonImageFragmentDoc}
  ${PokemonTypesFragmentDoc}
  ${StatsFragmentDoc}
  ${MoveFragmentDoc}
  ${SpeciesFragmentDoc}
`

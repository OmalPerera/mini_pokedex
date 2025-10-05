import * as Types from '../../../api/types'

import {gql} from '@apollo/client'
import {PokemonDetailsFragmentDoc} from './dailyPokemon.generated'
import * as Apollo from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client/react'
const defaultOptions = {} as const
export type GetPokemonByIdQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Pokemon_Bool_Exp>
}>

export type GetPokemonByIdQuery = {
  __typename?: 'query_root'
  pokemon: Array<{
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
  }>
}

export const GetPokemonByIdDocument = gql`
  query GetPokemonById($where: pokemon_bool_exp) {
    pokemon(where: $where) {
      ...PokemonDetailsFragment
    }
  }
  ${PokemonDetailsFragmentDoc}
`

/**
 * __useGetPokemonByIdQuery__
 *
 * To run a query within a React component, call `useGetPokemonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonByIdQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPokemonByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPokemonByIdQuery,
    GetPokemonByIdQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useQuery<
    GetPokemonByIdQuery,
    GetPokemonByIdQueryVariables
  >(GetPokemonByIdDocument, options)
}
export function useGetPokemonByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPokemonByIdQuery,
    GetPokemonByIdQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useLazyQuery<
    GetPokemonByIdQuery,
    GetPokemonByIdQueryVariables
  >(GetPokemonByIdDocument, options)
}
export function useGetPokemonByIdSuspenseQuery(
  baseOptions?:
    | ApolloReactHooks.SkipToken
    | ApolloReactHooks.SuspenseQueryHookOptions<
        GetPokemonByIdQuery,
        GetPokemonByIdQueryVariables
      >,
) {
  const options =
    baseOptions === ApolloReactHooks.skipToken
      ? baseOptions
      : {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useSuspenseQuery<
    GetPokemonByIdQuery,
    GetPokemonByIdQueryVariables
  >(GetPokemonByIdDocument, options)
}
export type GetPokemonByIdQueryHookResult = ReturnType<
  typeof useGetPokemonByIdQuery
>
export type GetPokemonByIdLazyQueryHookResult = ReturnType<
  typeof useGetPokemonByIdLazyQuery
>
export type GetPokemonByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetPokemonByIdSuspenseQuery
>
export type GetPokemonByIdQueryResult = Apollo.QueryResult<
  GetPokemonByIdQuery,
  GetPokemonByIdQueryVariables
>

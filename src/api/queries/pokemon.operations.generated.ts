import * as Types from '../types'

import {gql} from '@apollo/client'
import {PokemonDetailsFragmentDoc} from './pokemon.generated'
import * as Apollo from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client/react'
const defaultOptions = {} as const
export type GetPokemonsByIdsQueryVariables = Types.Exact<{
  ids: Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']
}>

export type GetPokemonsByIdsQuery = {
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
  }>
}

export type SearchPokemonsQueryVariables = Types.Exact<{
  q: Types.Scalars['String']['input']
  limit: Types.Scalars['Int']['input']
  offset: Types.Scalars['Int']['input']
}>

export type SearchPokemonsQuery = {
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
  }>
}

export const GetPokemonsByIdsDocument = gql`
  query GetPokemonsByIds($ids: [Int!]!) {
    pokemon(where: {id: {_in: $ids}}) {
      ...PokemonDetailsFragment
    }
  }
  ${PokemonDetailsFragmentDoc}
`

/**
 * __useGetPokemonsByIdsQuery__
 *
 * To run a query within a React component, call `useGetPokemonsByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsByIdsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetPokemonsByIdsQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetPokemonsByIdsQuery,
    GetPokemonsByIdsQueryVariables
  > &
    (
      | {variables: GetPokemonsByIdsQueryVariables; skip?: boolean}
      | {skip: boolean}
    ),
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useQuery<
    GetPokemonsByIdsQuery,
    GetPokemonsByIdsQueryVariables
  >(GetPokemonsByIdsDocument, options)
}
export function useGetPokemonsByIdsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPokemonsByIdsQuery,
    GetPokemonsByIdsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useLazyQuery<
    GetPokemonsByIdsQuery,
    GetPokemonsByIdsQueryVariables
  >(GetPokemonsByIdsDocument, options)
}
export function useGetPokemonsByIdsSuspenseQuery(
  baseOptions?:
    | ApolloReactHooks.SkipToken
    | ApolloReactHooks.SuspenseQueryHookOptions<
        GetPokemonsByIdsQuery,
        GetPokemonsByIdsQueryVariables
      >,
) {
  const options =
    baseOptions === ApolloReactHooks.skipToken
      ? baseOptions
      : {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useSuspenseQuery<
    GetPokemonsByIdsQuery,
    GetPokemonsByIdsQueryVariables
  >(GetPokemonsByIdsDocument, options)
}
export type GetPokemonsByIdsQueryHookResult = ReturnType<
  typeof useGetPokemonsByIdsQuery
>
export type GetPokemonsByIdsLazyQueryHookResult = ReturnType<
  typeof useGetPokemonsByIdsLazyQuery
>
export type GetPokemonsByIdsSuspenseQueryHookResult = ReturnType<
  typeof useGetPokemonsByIdsSuspenseQuery
>
export type GetPokemonsByIdsQueryResult = Apollo.QueryResult<
  GetPokemonsByIdsQuery,
  GetPokemonsByIdsQueryVariables
>
export const SearchPokemonsDocument = gql`
  query SearchPokemons($q: String!, $limit: Int!, $offset: Int!) {
    pokemon(
      where: {name: {_ilike: $q}}
      limit: $limit
      offset: $offset
      order_by: {id: asc}
    ) {
      ...PokemonDetailsFragment
    }
  }
  ${PokemonDetailsFragmentDoc}
`

/**
 * __useSearchPokemonsQuery__
 *
 * To run a query within a React component, call `useSearchPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPokemonsQuery({
 *   variables: {
 *      q: // value for 'q'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSearchPokemonsQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    SearchPokemonsQuery,
    SearchPokemonsQueryVariables
  > &
    (
      | {variables: SearchPokemonsQueryVariables; skip?: boolean}
      | {skip: boolean}
    ),
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useQuery<
    SearchPokemonsQuery,
    SearchPokemonsQueryVariables
  >(SearchPokemonsDocument, options)
}
export function useSearchPokemonsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SearchPokemonsQuery,
    SearchPokemonsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useLazyQuery<
    SearchPokemonsQuery,
    SearchPokemonsQueryVariables
  >(SearchPokemonsDocument, options)
}
export function useSearchPokemonsSuspenseQuery(
  baseOptions?:
    | ApolloReactHooks.SkipToken
    | ApolloReactHooks.SuspenseQueryHookOptions<
        SearchPokemonsQuery,
        SearchPokemonsQueryVariables
      >,
) {
  const options =
    baseOptions === ApolloReactHooks.skipToken
      ? baseOptions
      : {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useSuspenseQuery<
    SearchPokemonsQuery,
    SearchPokemonsQueryVariables
  >(SearchPokemonsDocument, options)
}
export type SearchPokemonsQueryHookResult = ReturnType<
  typeof useSearchPokemonsQuery
>
export type SearchPokemonsLazyQueryHookResult = ReturnType<
  typeof useSearchPokemonsLazyQuery
>
export type SearchPokemonsSuspenseQueryHookResult = ReturnType<
  typeof useSearchPokemonsSuspenseQuery
>
export type SearchPokemonsQueryResult = Apollo.QueryResult<
  SearchPokemonsQuery,
  SearchPokemonsQueryVariables
>

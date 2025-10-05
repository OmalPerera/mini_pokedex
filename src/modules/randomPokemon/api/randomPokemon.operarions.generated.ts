import * as Types from '../../../api/types'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client/react'
const defaultOptions = {} as const
export type GetPokemonSpeciesQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Pokemonspecies_Bool_Exp>
  orderBy?: Types.InputMaybe<
    Array<Types.Pokemonspecies_Order_By> | Types.Pokemonspecies_Order_By
  >
}>

export type GetPokemonSpeciesQuery = {
  __typename?: 'query_root'
  pokemonspecies: Array<{
    __typename?: 'pokemonspecies'
    name: string
    id: number
    generation?: {__typename?: 'generation'; name: string}
  }>
  generations: Array<{
    __typename?: 'generation'
    name: string
    pokemon_species: {
      __typename?: 'pokemonspecies_aggregate'
      aggregate?: {
        __typename?: 'pokemonspecies_aggregate_fields'
        count: number
      }
    }
  }>
}

export type GetPokedexQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Pokedex_Bool_Exp>
  orderBy?: Types.InputMaybe<
    Array<Types.Pokedex_Order_By> | Types.Pokedex_Order_By
  >
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type GetPokedexQuery = {
  __typename?: 'query_root'
  pokedex: Array<{__typename?: 'pokedex'; id: number; name: string}>
}

export const GetPokemonSpeciesDocument = gql`
  query GetPokemonSpecies(
    $where: pokemonspecies_bool_exp
    $orderBy: [pokemonspecies_order_by!]
  ) {
    pokemonspecies(where: $where, order_by: $orderBy) {
      name
      id
      generation {
        name
      }
    }
    generations: generation {
      name
      pokemon_species: pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

/**
 * __useGetPokemonSpeciesQuery__
 *
 * To run a query within a React component, call `useGetPokemonSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonSpeciesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetPokemonSpeciesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPokemonSpeciesQuery,
    GetPokemonSpeciesQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useQuery<
    GetPokemonSpeciesQuery,
    GetPokemonSpeciesQueryVariables
  >(GetPokemonSpeciesDocument, options)
}
export function useGetPokemonSpeciesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPokemonSpeciesQuery,
    GetPokemonSpeciesQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useLazyQuery<
    GetPokemonSpeciesQuery,
    GetPokemonSpeciesQueryVariables
  >(GetPokemonSpeciesDocument, options)
}
export function useGetPokemonSpeciesSuspenseQuery(
  baseOptions?:
    | ApolloReactHooks.SkipToken
    | ApolloReactHooks.SuspenseQueryHookOptions<
        GetPokemonSpeciesQuery,
        GetPokemonSpeciesQueryVariables
      >,
) {
  const options =
    baseOptions === ApolloReactHooks.skipToken
      ? baseOptions
      : {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useSuspenseQuery<
    GetPokemonSpeciesQuery,
    GetPokemonSpeciesQueryVariables
  >(GetPokemonSpeciesDocument, options)
}
export type GetPokemonSpeciesQueryHookResult = ReturnType<
  typeof useGetPokemonSpeciesQuery
>
export type GetPokemonSpeciesLazyQueryHookResult = ReturnType<
  typeof useGetPokemonSpeciesLazyQuery
>
export type GetPokemonSpeciesSuspenseQueryHookResult = ReturnType<
  typeof useGetPokemonSpeciesSuspenseQuery
>
export type GetPokemonSpeciesQueryResult = Apollo.QueryResult<
  GetPokemonSpeciesQuery,
  GetPokemonSpeciesQueryVariables
>
export const GetPokedexDocument = gql`
  query GetPokedex(
    $where: pokedex_bool_exp
    $orderBy: [pokedex_order_by!]
    $limit: Int
    $offset: Int
  ) {
    pokedex(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
      id
      name
    }
  }
`

/**
 * __useGetPokedexQuery__
 *
 * To run a query within a React component, call `useGetPokedexQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokedexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokedexQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetPokedexQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPokedexQuery,
    GetPokedexQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useQuery<GetPokedexQuery, GetPokedexQueryVariables>(
    GetPokedexDocument,
    options,
  )
}
export function useGetPokedexLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPokedexQuery,
    GetPokedexQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useLazyQuery<
    GetPokedexQuery,
    GetPokedexQueryVariables
  >(GetPokedexDocument, options)
}
export function useGetPokedexSuspenseQuery(
  baseOptions?:
    | ApolloReactHooks.SkipToken
    | ApolloReactHooks.SuspenseQueryHookOptions<
        GetPokedexQuery,
        GetPokedexQueryVariables
      >,
) {
  const options =
    baseOptions === ApolloReactHooks.skipToken
      ? baseOptions
      : {...defaultOptions, ...baseOptions}
  return ApolloReactHooks.useSuspenseQuery<
    GetPokedexQuery,
    GetPokedexQueryVariables
  >(GetPokedexDocument, options)
}
export type GetPokedexQueryHookResult = ReturnType<typeof useGetPokedexQuery>
export type GetPokedexLazyQueryHookResult = ReturnType<
  typeof useGetPokedexLazyQuery
>
export type GetPokedexSuspenseQueryHookResult = ReturnType<
  typeof useGetPokedexSuspenseQuery
>
export type GetPokedexQueryResult = Apollo.QueryResult<
  GetPokedexQuery,
  GetPokedexQueryVariables
>

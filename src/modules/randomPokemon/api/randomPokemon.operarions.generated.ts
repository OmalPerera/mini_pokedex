import * as Types from '../../../api/types'

import * as Apollo from '@apollo/client'
import {gql} from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client/react'
import {PokemonFragmentDoc} from './randomPokemon.generated'
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
    pokemons: Array<{
      __typename?: 'pokemon'
      pokemontypes: Array<{
        __typename?: 'pokemontype'
        type?: {__typename?: 'type'; name: string}
      }>
      pokemonsprites: Array<{
        __typename?: 'pokemonsprites'
        artwork: Record<string, unknown>
      }>
    }>
  }>
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
      pokemons {
        ...PokemonFragment
      }
    }
  }
  ${PokemonFragmentDoc}
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

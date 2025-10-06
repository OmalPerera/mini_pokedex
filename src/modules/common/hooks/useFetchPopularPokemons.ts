import {useGetPokemonsByIdsLazyQuery} from '@/src/api/queries/pokemon.operations.generated'
import {getPokedexStore} from '@/src/store/pokedex.store'

type Props = {
  shouldWriteToStore: boolean
}

export const useFetchPopularPokemons = () => {
  const [fetchByIds, {data, loading, error}] = useGetPokemonsByIdsLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  const fetchPopularPokemons = async (props: Props) => {
    const {data: fetchedData} = await fetchByIds({
      variables: {ids: Array.from({length: 20}, (_, i) => i + 1)},
    })

    if (props.shouldWriteToStore && fetchedData?.pokemon) {
      getPokedexStore().setPopularPokemons(fetchedData.pokemon)
    }
  }

  return {
    fetchPopularPokemons,
    data: data?.pokemon,
    loading,
    error,
  }
}

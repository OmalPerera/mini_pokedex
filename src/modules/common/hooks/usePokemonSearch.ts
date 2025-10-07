import {useEffect, useState} from 'react'
import {useSearchPokemonsLazyQuery} from '@/src/api/queries/pokemon.operations.generated'

const ITEMS_PER_PAGE = 20

export const usePokemonSearch = () => {
  const [searchString, setSearchString] = useState('')
  const [offset, setOffset] = useState(0)

  const [searchPokemon, {data, loading, fetchMore}] =
    useSearchPokemonsLazyQuery({fetchPolicy: 'cache-and-network'})

  useEffect(() => {
    if (!searchString) {
      return
    }
    searchPokemon({
      variables: {
        q: `%${searchString}%`,
        limit: ITEMS_PER_PAGE,
        offset: 0,
      },
    })
    setOffset(0)
  }, [searchString, searchPokemon])

  const handleLoadMore = () => {
    if (loading || !searchString) {
      return
    }

    const newOffset = offset + ITEMS_PER_PAGE
    fetchMore({
      variables: {
        q: `%${searchString}%`,
        limit: ITEMS_PER_PAGE,
        offset: newOffset,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) {
          return prev
        }
        return {
          ...prev,
          pokemon: [
            ...(prev.pokemon || []),
            ...(fetchMoreResult.pokemon || []),
          ],
        }
      },
    })
    setOffset(newOffset)
  }

  const handleClear = () => {
    setSearchString('')
    setOffset(0)
    searchPokemon({
      variables: {
        q: '%%',
        limit: ITEMS_PER_PAGE,
        offset: 0,
      },
    })
  }

  return {
    searchString,
    setSearchString,
    handleLoadMore,
    handleClear,
    data,
    loading,
  }
}

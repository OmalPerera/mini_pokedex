import {PokemonDetailsFragment} from '@/src/api/queries/pokemon.generated'
import {getPokedexStore} from '@/src/store/pokedex.store'
import * as Haptics from 'expo-haptics'

type Props = {
  isFavorite: boolean
  details?: PokemonDetailsFragment
}

export const useTogglePokemonFavorite = () => {
  const pokedexStore = getPokedexStore()
  const toggleFavorite = ({isFavorite, details}: Props) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    if (isFavorite) {
      pokedexStore.removeFromFavorites(details?.id || 0)
    } else {
      pokedexStore.addToFavorites(details)
    }
  }
  return {toggleFavorite}
}

import {PokemonDetailsFragment} from '../api/queries/pokemon.generated'

export const sanitizeEscapeChars = (text?: string) =>
  text?.replace(/[\n\t\r\f\\]/g, ' ')

export const formatPokemonForUI = (pokemon?: PokemonDetailsFragment) => {
  return {
    id: pokemon?.id || 0,
    name: pokemon?.name || '',
    image: pokemon?.pokemonsprites[0].artwork.toString(),
    type: pokemon?.pokemontypes[0].type?.typenames[0].name || '',
    about: sanitizeEscapeChars(
      pokemon?.pokemonspecy?.pokemonspeciesflavortexts[0].flavor_text || '',
    ),
    height: pokemon?.height || 0,
    weight: pokemon?.weight || 0,
    evolutionChain: pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies.map(
      species => ({
        name: species.name,
        image: species.pokemons[0].pokemonsprites[0].artwork.toString(),
        condition: species.pokemonspeciesnames[0].name,
      }),
    ),
    stats: pokemon?.pokemonstats || [],
  }
}

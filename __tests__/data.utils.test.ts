// @ts-nocheck
import {sanitizeEscapeChars, formatPokemonForUI} from '@/src/utils/dataUtils'

describe('sanitizeEscapeChars', () => {
  it('should replace backslash-n with a space', () => {
    expect(sanitizeEscapeChars('Pikachu is a mouse\nPokemon.')).toBe(
      'Pikachu is a mouse Pokemon.',
    )
  })

  it('should replace backslash-f with a space', () => {
    expect(sanitizeEscapeChars('Pikachu has a lightning\fbolt tail.')).toBe(
      'Pikachu has a lightning bolt tail.',
    )
  })

  it('should not modify strings without escape characters', () => {
    expect(sanitizeEscapeChars('Pikachu is electric type.')).toBe(
      'Pikachu is electric type.',
    )
  })

  it('should handle empty strings', () => {
    expect(sanitizeEscapeChars('')).toBe('')
  })

  it('should handle multiple escape characters', () => {
    expect(sanitizeEscapeChars('Pikachu\nuses\fthunderbolt.')).toBe(
      'Pikachu uses thunderbolt.',
    )
  })
})

const MOCK_POKEMON = {
  __typename: 'pokemon',
  pokemonsprites: [
    {
      __typename: 'pokemonsprites',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png',
    },
  ],
  pokemontypes: [
    {
      __typename: 'pokemontype',
      type: {
        __typename: 'type',
        name: 'normal',
        typenames: [
          {
            __typename: 'typename',
            name: 'Normal',
          },
        ],
      },
    },
  ],
  pokemonstats: [
    {
      __typename: 'pokemonstat',
      base_stat: 70,
      effort: 1,
      stat: {
        __typename: 'stat',
        statnames: [
          {
            __typename: 'statname',
            name: 'HP',
          },
        ],
      },
    },
    {
      __typename: 'pokemonstat',
      base_stat: 65,
      effort: 0,
      stat: {
        __typename: 'stat',
        statnames: [
          {
            __typename: 'statname',
            name: 'Attack',
          },
        ],
      },
    },
    {
      __typename: 'pokemonstat',
      base_stat: 65,
      effort: 0,
      stat: {
        __typename: 'stat',
        statnames: [
          {
            __typename: 'statname',
            name: 'Defense',
          },
        ],
      },
    },
    {
      __typename: 'pokemonstat',
      base_stat: 55,
      effort: 0,
      stat: {
        __typename: 'stat',
        statnames: [
          {
            __typename: 'statname',
            name: 'Special Attack',
          },
        ],
      },
    },
    {
      __typename: 'pokemonstat',
      base_stat: 55,
      effort: 0,
      stat: {
        __typename: 'stat',
        statnames: [
          {
            __typename: 'statname',
            name: 'Special Defense',
          },
        ],
      },
    },
    {
      __typename: 'pokemonstat',
      base_stat: 90,
      effort: 1,
      stat: {
        __typename: 'stat',
        statnames: [
          {
            __typename: 'statname',
            name: 'Speed',
          },
        ],
      },
    },
  ],
  pokemonmoves: [
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'double-slap',
        accuracy: 85,
        power: 15,
        pp: 10,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Double Slap',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'growl',
        accuracy: 100,
        power: null,
        pp: 40,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Growl',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'sing',
        accuracy: 55,
        power: null,
        pp: 15,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Sing',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'attract',
        accuracy: 100,
        power: null,
        pp: 15,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Attract',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'ice-beam',
        accuracy: 100,
        power: 90,
        pp: 10,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Ice Beam',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'blizzard',
        accuracy: 70,
        power: 110,
        pp: 5,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Blizzard',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'hyper-beam',
        accuracy: 90,
        power: 150,
        pp: 5,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Hyper Beam',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'strength',
        accuracy: 100,
        power: 80,
        pp: 15,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Strength',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'solar-beam',
        accuracy: 100,
        power: 120,
        pp: 10,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Solar Beam',
          },
        ],
      },
    },
    {
      __typename: 'pokemonmove',
      move: {
        __typename: 'move',
        name: 'thunderbolt',
        accuracy: 100,
        power: 90,
        pp: 15,
        priority: 0,
        movenames: [
          {
            __typename: 'movename',
            name: 'Thunderbolt',
          },
        ],
      },
    },
  ],
  pokemonspecy: {
    __typename: 'pokemonspecies',
    id: 301,
    name: 'delcatty',
    evolution_chain_id: 148,
    evolves_from_species_id: 300,
    pokemoncolor: {
      __typename: 'pokemoncolor',
      name: 'purple',
    },
    pokemonspeciesflavortexts: [
      {
        __typename: 'pokemonspeciesflavortext',
        flavor_text:
          'DELCATTY prefers to live an unfettered\nexistence in which it can do as it\npleases at its own pace.\fBecause this POKéMON eats and sleeps\nwhenever it decides, its daily routines\nare completely random.',
      },
    ],
    evolutionchain: {
      __typename: 'evolutionchain',
      id: 148,
      pokemonspecies: [
        {
          __typename: 'pokemonspecies',
          id: 300,
          name: 'skitty',
          pokemonspeciesnames: [
            {
              __typename: 'pokemonspeciesname',
              name: 'Skitty',
            },
          ],
          evolves_from_species_id: null,
          pokemons: [
            {
              __typename: 'pokemon',
              id: 300,
              name: 'skitty',
              pokemonsprites: [
                {
                  __typename: 'pokemonsprites',
                  artwork:
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png',
                },
              ],
            },
          ],
        },
        {
          __typename: 'pokemonspecies',
          id: 301,
          name: 'delcatty',
          pokemonspeciesnames: [
            {
              __typename: 'pokemonspeciesname',
              name: 'Delcatty',
            },
          ],
          evolves_from_species_id: 300,
          pokemons: [
            {
              __typename: 'pokemon',
              id: 301,
              name: 'delcatty',
              pokemonsprites: [
                {
                  __typename: 'pokemonsprites',
                  artwork:
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  id: 301,
  name: 'delcatty',
  height: 11,
  weight: 326,
}

describe('formatPokemonForUI', () => {
  it('should format a complete pokemon object correctly', () => {
    const formattedPokemon = formatPokemonForUI(MOCK_POKEMON)

    expect(formattedPokemon.id).toBe(MOCK_POKEMON.id)
    expect(formattedPokemon.name).toBe(MOCK_POKEMON.name)
    expect(formattedPokemon.image).toBe(MOCK_POKEMON.pokemonsprites[0].artwork)
    expect(formattedPokemon.type).toBe('Normal')
    expect(formattedPokemon.about).toBe(
      sanitizeEscapeChars(
        MOCK_POKEMON.pokemonspecy?.pokemonspeciesflavortexts[0].flavor_text,
      ),
    )
    expect(formattedPokemon.height).toBe(MOCK_POKEMON.height)
    expect(formattedPokemon.weight).toBe(MOCK_POKEMON.weight)
    expect(formattedPokemon.stats?.length).toBe(
      MOCK_POKEMON.pokemonstats.length,
    )
    expect(formattedPokemon.evolutionChain?.length).toBe(
      MOCK_POKEMON.pokemonspecy?.evolutionchain?.pokemonspecies.length,
    )

    // Verify specific evolution chain data
    expect(formattedPokemon.evolutionChain?.[0].name).toBe(
      MOCK_POKEMON.pokemonspecy?.evolutionchain?.pokemonspecies[0].name,
    )
    expect(formattedPokemon.evolutionChain?.[0].image).toBe(
      MOCK_POKEMON.pokemonspecy?.evolutionchain?.pokemonspecies[0].pokemons[0]
        .pokemonsprites[0].artwork,
    )
    expect(formattedPokemon.evolutionChain?.[0].condition).toBe(
      MOCK_POKEMON.pokemonspecy?.evolutionchain?.pokemonspecies[0]
        .pokemonspeciesnames[0].name,
    )
  })

  it('should handle a pokemon with minimal data', () => {
    const minimalPokemon = {
      id: 999,
      name: 'MinimalMon',
      pokemonsprites: [],
      pokemontypes: [],
      pokemonstats: [],
      pokemonspecy: {
        pokemonspeciesflavortexts: [],
        evolutionchain: {pokemonspecies: []},
      },
      height: 0,
      weight: 0,
    }

    const formattedPokemon = formatPokemonForUI(minimalPokemon)

    expect(formattedPokemon.id).toBe(999)
    expect(formattedPokemon.name).toBe('MinimalMon')
    expect(formattedPokemon.image).toBeUndefined()
    expect(formattedPokemon.type).toBe('unknown')
    expect(formattedPokemon.about).toBe('')
    expect(formattedPokemon.height).toBe(0)
    expect(formattedPokemon.weight).toBe(0)
    expect(formattedPokemon.stats).toEqual([])
    expect(formattedPokemon.evolutionChain).toEqual([])
  })

  it('should handle undefined input', () => {
    const formattedPokemon = formatPokemonForUI(undefined)

    expect(formattedPokemon.id).toBe(0)
    expect(formattedPokemon.name).toBe('')
    expect(formattedPokemon.image).toBeUndefined()
    expect(formattedPokemon.type).toBe('unknown')
    expect(formattedPokemon.about).toBe('')
    expect(formattedPokemon.height).toBe(0)
    expect(formattedPokemon.weight).toBe(0)
    expect(formattedPokemon.stats).toEqual([])
    expect(formattedPokemon.evolutionChain).toEqual([])
  })
})

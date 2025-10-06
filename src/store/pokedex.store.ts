import {makeAutoObservable} from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {makePersistable} from 'mobx-persist-store'
import {PokemonDetailsFragment} from '../api/queries/pokemon.generated'

class PokedexStore {
  _favoriteList?: PokemonDetailsFragment[] = []

  _popularPokemons?: PokemonDetailsFragment[] = []

  _poplarPokemonsLastFetchUnixTime: number = 0

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'PokedexStore',
      properties: [
        '_favoriteList',
        '_popularPokemons',
        '_poplarPokemonsLastFetchUnixTime',
      ],
      storage: AsyncStorage,
      debugMode: false,
    })
  }

  addToFavorites(item?: PokemonDetailsFragment) {
    if (item && !this._favoriteList?.some(favItem => favItem.id === item.id)) {
      this._favoriteList = [...(this._favoriteList || []), item]
    }
  }

  removeFromFavorites(itemId?: number) {
    this._favoriteList = this._favoriteList?.filter(item => item.id !== itemId)
  }

  getFavoriteList(): PokemonDetailsFragment[] | undefined {
    return this._favoriteList
  }

  getFavoriteItemsIds(): number[] {
    return this._favoriteList?.map(item => item.id) || []
  }

  setPopularPokemon(pokemon: PokemonDetailsFragment[]) {
    this._popularPokemons = pokemon
    this._poplarPokemonsLastFetchUnixTime = Date.now()
  }

  getPopularPokemon(): PokemonDetailsFragment[] | undefined {
    return this._popularPokemons
  }

  getPopularPokemonsLastFetchUnix(): number {
    return this._poplarPokemonsLastFetchUnixTime
  }
}

let pokedexStore: PokedexStore

export function getPokedexStore(): PokedexStore {
  if (!pokedexStore) {
    pokedexStore = new PokedexStore()
  }
  return pokedexStore
}

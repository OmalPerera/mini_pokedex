import {makeAutoObservable} from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {makePersistable} from 'mobx-persist-store'
import {PokemonDetailsFragment} from '../modules/randomPokemon/api/dailyPokemon.generated'

class PokedexStore {
  _favoriteList?: PokemonDetailsFragment[] = []

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'PokedexStore',
      properties: ['_favoriteList'],
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
}

export const pokedexStore = new PokedexStore()

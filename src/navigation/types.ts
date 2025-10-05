import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type {CompositeScreenProps} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {PokemonDetailsFragment} from '../modules/randomPokemon/api/dailyPokemon.generated'

export type RootStackParamList = {
  TabNavigator: undefined
  PokemonDetailScreen: {
    id: number
    details?: PokemonDetailsFragment
  }
}

export type MainTabParamList = {
  Random: undefined
  Explore: undefined
  Favorites: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type MainTabScreenProps<Screen extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >

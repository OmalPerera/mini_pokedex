import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type {CompositeScreenProps} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {PokemonDetailsFragment} from '../api/queries/pokemon.generated'

export type RootStackParamList = {
  LaunchScreen: undefined
  TabNavigator: undefined
  PokemonDetailScreen: {
    id: number
    details?: PokemonDetailsFragment
  }
}

export type MainTabParamList = {
  DailyPokemon: undefined
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

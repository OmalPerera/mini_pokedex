import {StatusBar} from 'expo-status-bar'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import {useEffect} from 'react'
import {PokemonApolloProvider} from './api'
import {NavigationRouter} from './navigation'
import './store'

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await new Promise(resolve => setTimeout(resolve, 1000))
      } finally {
        await SplashScreen.hideAsync()
      }
    }

    prepare()
  }, [])

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PokemonApolloProvider>
        <StatusBar translucent style={'dark'} />
        <NavigationRouter />
      </PokemonApolloProvider>
    </GestureHandlerRootView>
  )
}

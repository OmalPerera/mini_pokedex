import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {PokemonDetailScreen} from '../modules/common/PokemonDetails/'
import {LaunchScreen} from '../modules/common/LaunchScreen'
import {MainTabNavigator} from './MainTabNavigator'
import {RootStackParamList} from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const NavigationRouter = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="TabNavigator" component={MainTabNavigator} />
        <Stack.Screen
          name="PokemonDetailScreen"
          component={PokemonDetailScreen}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

import {FavoriteIcon, Pokeball} from '@/assets'
import {Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import {ExploreScreen, DailyPokemonScreen} from '../modules'
import {FavoritesScreen} from '../modules/favorites/FavoriteScreen'
import {TabBarButton} from './components'
import type {MainTabParamList} from './types'
import {useTheme} from '../ui/theme'

const Tab = createBottomTabNavigator<MainTabParamList>()

export function MainTabNavigator() {
  const {colors, spacing} = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.grey_850,
        tabBarInactiveTintColor: colors.grey_700,
        headerShown: false,
        tabBarButton: TabBarButton,
        tabBarStyle: {
          paddingTop: spacing.s8,
          backgroundColor: colors.primary_white,
        },
        tabBarLabelStyle: {
          marginTop: spacing.s2,
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="DailyPokemon"
        component={DailyPokemonScreen}
        options={{
          title: 'Daily',
          tabBarIcon: ({focused}) => <Pokeball size={28} isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="search"
              size={28}
              color={focused ? colors.red_550 : colors.grey_700}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: ({focused}) => (
            <FavoriteIcon size={28} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

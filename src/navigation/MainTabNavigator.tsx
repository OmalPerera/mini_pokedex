import { FavoriteIcon, Pokeball } from "@/assets";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ExploreScreen, RandomPokemonScreen } from "../modules";
import { FavoritesScreen } from "../modules/favorites/FavoriteScreen";
import { colors } from "../utils/theme";
import { TabBarButton } from "./components";
import type { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.grey_700,
        headerShown: false,
        tabBarButton: TabBarButton,
        tabBarStyle: {
          paddingTop: 6,
          backgroundColor: colors.primary_white,
        },
        tabBarLabelStyle: {
          marginTop: 2,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Random"
        component={RandomPokemonScreen}
        options={{
          title: "Daily",
          tabBarIcon: ({ focused }) => (
            <Pokeball size={28} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={28}
              color={focused ? colors.red_700 : colors.grey_700}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <FavoriteIcon size={28} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

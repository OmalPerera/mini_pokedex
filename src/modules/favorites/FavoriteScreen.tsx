import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import type { MainTabScreenProps } from "../../navigation/types";

type Props = MainTabScreenProps<"Favorites">;

export function FavoritesScreen({ navigation, route }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.subtitle}>Your favorite Pokémon here!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});

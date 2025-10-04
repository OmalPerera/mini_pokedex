import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import type { MainTabScreenProps } from "../../navigation/types";

type Props = MainTabScreenProps<"Explore">;

export function ExploreScreen({ navigation, route }: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>Discover new Pokémon here!</Text>
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

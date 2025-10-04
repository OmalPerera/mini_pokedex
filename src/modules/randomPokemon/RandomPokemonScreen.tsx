import { images } from "@/assets/images";
import { AppHeader, GradientBackground } from "@/src/ui/components";
import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { MainTabScreenProps } from "../../navigation/types";
import { CreatureCard } from "./components";

export const RandomPokemonScreen: FC<MainTabScreenProps<"Random">> = ({
  navigation,
  route,
}) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <GradientBackground style={{ paddingBottom: bottom }}>
      <AppHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <CreatureCard
          name="Pikachu"
          image={images.pikachu}
          isFavorite={false}
          type="Electric"
          onPressLearnMore={() => console.log("Learn More Pressed")}
          onPressFavorite={() => console.log("Favorite Pressed")}
          onPressAnotherOne={() => console.log("Another One Pressed")}
        />
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PokemonApolloProvider } from "./api";
import { NavigationRouter } from "./navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PokemonApolloProvider>
        <StatusBar translucent style={"dark"} />
        <NavigationRouter />
      </PokemonApolloProvider>
    </GestureHandlerRootView>
  );
}

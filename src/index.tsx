import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationRouter } from "./navigation";

export default function App() {
  const scheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar translucent style={scheme === "dark" ? "light" : "dark"} />
      <NavigationRouter />
    </GestureHandlerRootView>
  );
}

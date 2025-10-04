import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationRouter } from "./navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar translucent style={"dark"} />
      <NavigationRouter />
    </GestureHandlerRootView>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import StackRoutes  from "./stack.routes";

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackRoutes/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
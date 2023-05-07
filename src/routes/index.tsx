import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./routes";
import { View } from "react-native";
export function Routes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}

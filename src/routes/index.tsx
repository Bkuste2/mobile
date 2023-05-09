import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./routes";
import { UserProvider } from "../contexts/userContext";
export function Routes() {
  return (
    <NavigationContainer>
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </NavigationContainer>
  );
}

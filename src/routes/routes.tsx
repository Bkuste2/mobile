import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../pages/SplashScreen";
import { SignUp } from "../pages/SignUp";

const { Screen, Navigator } = createNativeStackNavigator();

export function MainRoutes() {
  return (
    <Navigator>
      <Screen
        name="splashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="signUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

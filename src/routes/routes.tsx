import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../pages/SplashScreen";
import { SignUpFirstPage } from "../pages/SignUpFirstPage";
import { SignUpSecondPage } from "../pages/SignUpSecondPage";
import { SignUpThirdPage } from "../pages/SignUpThirdPage";

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
        name="signUpFirstPage"
        component={SignUpFirstPage}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="signUpSecondPage"
        component={SignUpSecondPage}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="signUpThirdPage"
        component={SignUpThirdPage}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

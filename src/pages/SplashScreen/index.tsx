import Lottie from "lottie-react-native";

import Animation from "../../assets/animations/splash-screen.json";
import { Container } from "./styles";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SplashScreen() {
  const navigation = useNavigation();
  function handleNavigate(route: keyof ReactNavigation.RootParamList) {
    navigation.navigate(route);
  }

  setTimeout(() => handleNavigate('signUp'), 2000);

  return (
    <Container>
      <Lottie source={Animation} autoPlay style={{ width: 200 }} />
    </Container>
  );
}

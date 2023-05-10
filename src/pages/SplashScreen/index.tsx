import Lottie from "lottie-react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Animation from "../../assets/animations/splash-screen.json";

export function SplashScreen() {
  const navigation = useNavigation();
  function handleNavigate(route: keyof ReactNavigation.RootParamList) {
    navigation.navigate(route);
  }

  setTimeout(() => handleNavigate('signUpFirstPage'), 2000);

  return (
    <Container>
      <Lottie source={Animation} autoPlay style={{ width: 200 }} />
    </Container>
  );
}

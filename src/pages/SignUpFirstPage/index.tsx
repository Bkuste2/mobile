import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { Container, InsideContainer, PrincipalImage, Registred, RegistredEmphasis, Title } from "./styles";
import { FirstSignUpForm } from "../../components/Form";
import { useNavigation } from "@react-navigation/native";

export function SignUpFirstPage() {
  const navigator = useNavigation()
  function handleNavigate(route: keyof ReactNavigation.RootParamList) {
    navigator.navigate(route)
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <InsideContainer>
            <Title>Faça seu Cadastro!</Title>
            <PrincipalImage
              source={require("../../assets/signUp/firstImg.png")}
            />
            <FirstSignUpForm />
          </InsideContainer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Registred onPress={() => handleNavigate('signUpSecondPage')}>
        Já Possui Cadastro? <RegistredEmphasis>Login</RegistredEmphasis>
      </Registred>
    </Container>
  );
}

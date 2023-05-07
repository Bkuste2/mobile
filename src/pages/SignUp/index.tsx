import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { Container, PrincipalImage, Title } from "./styles";
import { SignUpForm } from "../../components/Form";

export function SignUp() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
            <Title>Faça seu Cadastro!</Title>
            <PrincipalImage
              source={require("../../assets/signUp/firstImg.png")}
            />
            <SignUpForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}

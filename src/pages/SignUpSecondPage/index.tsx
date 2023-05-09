import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { Container, InsideContainer, PrincipalImage, Title } from "./styles";
import { SecondSignUpForm } from "../../components/Form";

export function SignUpSecondPage() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <InsideContainer>
            <Title>Agora Preencha as seguintes informações!</Title>
            <PrincipalImage
              source={require("../../assets/signUp/secondImg.png")}
            />
            <SecondSignUpForm />
          </InsideContainer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}

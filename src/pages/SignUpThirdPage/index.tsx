import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { Container, InsideContainer, Title } from "./styles";
import { ThirdSignUpForm } from "../../components/Form";

export function SignUpThirdPage() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <InsideContainer>
            <Title>Falta Pouco!</Title>
            <ThirdSignUpForm />
          </InsideContainer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}

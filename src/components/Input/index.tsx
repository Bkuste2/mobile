import { useState } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Container, Icon, InputBox } from "./styles";
import { Colors } from "../../patterns/theme";

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>["name"];
  value?: string;
};

export function Input({ icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const isActive: boolean = isFocused || isFilled

  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container active={isActive}>
      <Icon>
        <Feather
          name={icon}
          size={30}
          color={isActive ? Colors.primary : Colors.secondary}
        />
      </Icon>
      <InputBox onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
}

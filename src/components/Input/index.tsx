import { useState } from "react";
import { View, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Container, Icon, InputBox } from "./styles";

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>["name"];
  value?: string;
};

export function Input({ icon, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <Icon>
        <Feather
          name={icon}
          size={24}
          color={isFocused || isFilled ? "#0F4571" : "#000000"}
        />
      </Icon>
      <InputBox onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
}

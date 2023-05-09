import { Colors } from '../../patterns/theme'
import styled from "styled-components/native";

interface ContainerProps {
  active: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left-width: 3px;
  border-color: ${({ active }) => active ? Colors.primary : Colors.secondary};
`;

export const Icon = styled.View`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.TextInput`
  width: 85%;
  height: 100%;
  padding:0 16px;
`;

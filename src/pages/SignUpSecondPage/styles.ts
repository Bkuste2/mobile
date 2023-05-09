import { Colors } from '../../patterns/theme';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  `

export const Title = styled.Text`
  padding: 10%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${Colors.primary};
`

export const PrincipalImage = styled.Image`
  width: 80%;
  height: 250px;
  object-fit: contain;
`

export const InsideContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`

export const Registred = styled.Text`
  color: ${Colors.secondary};
  font-weight: bold;
  font-size: 16px;
`;

export const RegistredEmphasis = styled.Text`
  color: ${Colors.primary};
`;




import { Colors } from '../../patterns/theme';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${Colors.primary};
`

export const PrincipalImage = styled.Image`
  width: 100%;
  height: 300px;
  object-fit: contain;
  margin: 40px 0 ;
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




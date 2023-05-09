import { Colors } from './../../patterns/theme';
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto;
`;

export const UploadImageDiv = styled.TouchableOpacity`
  width: 90%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px;
  border-color: ${Colors.primary};
  border-radius: 16px;
  margin-bottom: 40px;
`

export const UploadImage = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const UploadImageText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.primary};
`

export const InputField = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const ErrorText = styled.Text`
  color: red;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 16px;
  background-color: ${Colors.primary};
`;

export const TextButton = styled.Text`
  color: white;
`;
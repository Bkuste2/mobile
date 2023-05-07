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
  gap: 10px;
  margin: auto;
`;


export const InputField = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: #000;
  border-radius: 16px;
`;
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px;
  border-radius: 12px;
`;

export const Icon = styled.View`
  width: 15%;
  display: flex;
  align-items: center;
`;

export const InputBox = styled.TextInput`
  width: 85%;
  height: 100%;
  padding:0 16px;
`;

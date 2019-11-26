import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #232222;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #00c3e0;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 50px;
  margin-left: 2.5%;
  border-radius: 3px;
  background-color: #fff;
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-horizontal: 10px;
`;

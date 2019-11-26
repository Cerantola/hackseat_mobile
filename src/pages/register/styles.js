import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #232222;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 100%;
  padding-vertical: 20px;
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
  padding: 20px;
`;

export const InputContent = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-horizontal: 10px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: #00c3e0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const LoginTextContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;

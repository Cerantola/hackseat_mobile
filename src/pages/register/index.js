import React from 'react';

import {
  Container,
  LogoContainer,
  Logo,
  InputContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
  ButtonText,
  LoginTextContainer,
  LoginText,
  KeyboardSafeContainer,
} from './styles';

export default function Register({navigation}) {
  return (
    <KeyboardSafeContainer>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <InputContainer>
          <InputContent>
            <Input placeholder={'Digite seu nome'} />
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Input placeholder={'Digite seu e-mail'} />
          </InputContent>
        </InputContainer>

        <ButtonContainer>
          <Button onPress={() => navigation.navigate('Feed')}>
            <ButtonText>Criar</ButtonText>
          </Button>
        </ButtonContainer>

        <LoginTextContainer onPress={() => navigation.navigate('Login')}>
          <LoginText>Já tem uma conta? Entre!</LoginText>
        </LoginTextContainer>
      </Container>
    </KeyboardSafeContainer>
  );
}

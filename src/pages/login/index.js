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
} from './styles';
import {KeyboardSafeContainer} from '../register/styles';

export default function Login({navigation}) {
  return (
    <KeyboardSafeContainer>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <InputContainer>
          <InputContent>
            <Input placeholder={'Digite seu e-mail'} />
          </InputContent>
        </InputContainer>

        <ButtonContainer>
          <Button>
            <ButtonText onPress={() => navigation.navigate('Feed')}>
              Entrar
            </ButtonText>
          </Button>
        </ButtonContainer>

        <LoginTextContainer onPress={() => navigation.navigate('Register')}>
          <LoginText>Cadastre-se</LoginText>
        </LoginTextContainer>
      </Container>
    </KeyboardSafeContainer>
  );
}

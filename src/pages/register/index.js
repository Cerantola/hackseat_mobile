import React from 'react';

import {
  Container,
  LogoContainer,
  LogoText,
  InputContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
  ButtonText,
  LoginTextContainer,
  LoginText,
} from './styles';

export default function Register() {
  return (
    <Container>
      <LogoContainer>
        <LogoText>HACKSEAT</LogoText>
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
        <Button>
          <ButtonText>Criar</ButtonText>
        </Button>
      </ButtonContainer>

      <LoginTextContainer>
        <LoginText>Já tem uma conta? Entre!</LoginText>
      </LoginTextContainer>
    </Container>
  );
}

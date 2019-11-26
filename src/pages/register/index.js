import React from 'react';

import {
  Container,
  LogoContainer,
  LogoText,
  InputContainer,
  Input,
} from './styles';

export default function Register() {
  return (
    <Container>
      <LogoContainer>
        <LogoText>HACKSEAT</LogoText>
      </LogoContainer>

      <InputContainer>
        <Input placeholder={'Digite seu e-mail'} />
      </InputContainer>
    </Container>
  );
}

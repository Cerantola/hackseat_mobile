import React from 'react';

import {Container, LogoContainer, Logo, InputContainer, Input} from './styles';

export default function Register() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <InputContainer>
        <Input placeholder={'Digite seu e-mail'} />
      </InputContainer>
    </Container>
  );
}

import React, {useState} from 'react';

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
  TypeUsersContainer,
  TypeUsersTextContainer,
  TypeUsersText,
  TypeUsersButtonText,
} from './styles';

import {ButtonGroup} from 'react-native-elements';

export default function Register({navigation}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const button1 = () => <TypeUsersButtonText>Aluno</TypeUsersButtonText>;
  const button2 = () => <TypeUsersButtonText>Dev</TypeUsersButtonText>;

  const buttons = [{element: button1}, {element: button2}];

  const updateIndex = selectedIndex => {
    setSelectedIndex(selectedIndex);
  };

  return (
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

      <TypeUsersContainer>
        <TypeUsersTextContainer>
          <TypeUsersText>Selecione o seu tipo de usuário</TypeUsersText>
        </TypeUsersTextContainer>

        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            height: 50,
            borderColor: '#00c3e0',
          }}
          selectedButtonStyle={{backgroundColor: '#232222'}}
        />
      </TypeUsersContainer>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Feed')}>
          <ButtonText>Criar</ButtonText>
        </Button>
      </ButtonContainer>

      <LoginTextContainer>
        <LoginText>Já tem uma conta? Entre!</LoginText>
      </LoginTextContainer>
    </Container>
  );
}

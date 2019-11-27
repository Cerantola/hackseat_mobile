import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../service/api';
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
  const [userLogged, setUserLogged] = useState({
    email: '',
    id: '',
  });

  const handleChangeEmail = text => {
    setUserLogged({...userLogged, email: text});
  };

  async function handleLogin() {
    try {
      const {data} = await api.post('', {
        email: userLogged.email,
      });
      setUserLogged({...userLogged, email: data.email, id: data.id});
      await AsyncStorage.setItem('userLogged', JSON.stringify(data));
      navigation.navigate('App');
    } catch (err) {
      console.tron.log('test');
      Alert.alert('Usuário não encontrado');
    }
  }

  return (
    <KeyboardSafeContainer>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <InputContainer>
          <InputContent>
            <Input
              placeholder={'Digite seu e-mail'}
              onChangeText={text => handleChangeEmail(text)}
              autoCapitalize={'none'}
            />
          </InputContent>
        </InputContainer>

        <ButtonContainer>
          <Button onPress={handleLogin}>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </ButtonContainer>

        <LoginTextContainer onPress={() => navigation.navigate('Register')}>
          <LoginText>Cadastre-se</LoginText>
        </LoginTextContainer>
      </Container>
    </KeyboardSafeContainer>
  );
}

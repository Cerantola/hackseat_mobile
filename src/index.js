import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import './config/reactotron';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import createRouter from './routes';

// import { Container } from './styles';

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.allowFontScaling = false;

export default function App() {
  const [useLogged, setLogged] = useState('');
  async function verifyLogin() {
    const data = await AsyncStorage.getItem('userLogged');
    setLogged(data);
  }

  useEffect(() => {
    verifyLogin();
  }, []);

  const Routes = createRouter(useLogged);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}

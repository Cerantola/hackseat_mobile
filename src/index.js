import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
TouchableOpacity.defaultProps.allowFontScaling = false;

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}

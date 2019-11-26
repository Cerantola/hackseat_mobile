import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';
import Login from '../pages/login';

const AppNavigator = createStackNavigator(
  {
    Register: {
      screen: Register,
    },
    Login,
  },
  {
    initialRouteName: 'Register',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);

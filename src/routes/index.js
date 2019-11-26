import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';

const AppNavigator = createStackNavigator(
  {
    Register: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Register',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);

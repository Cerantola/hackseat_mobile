import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';
import Feed from '../pages/feed';
import Login from '../pages/login';

const signedIn = AsyncStorage.getItem('userlogged') && false;

const Sign = createStackNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const App = createStackNavigator(
  {
    Feed,
  },
  {
    initialRouteName: 'Feed',
  },
);

export default createAppContainer(signedIn ? App : Sign);

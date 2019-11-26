import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';
import Feed from '../pages/feed';

const AppNavigator = createStackNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    Feed: {
      screen: Feed,
    },
  },
  {
    initialRouteName: 'Feed',
  },
);

export default createAppContainer(AppNavigator);

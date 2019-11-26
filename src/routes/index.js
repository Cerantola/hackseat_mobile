import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';
import Feed from '../pages/feed';
import Login from '../pages/login';
import Header from '../components/header';
import {RightText} from '../components/header/styles';

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
    Feed: {
      screen: Feed,
      navigationOptions: {
        header: (
          <Header
            backButton={false}
            rightContent={<RightText>Sair</RightText>}
            rightAction={() => {
              // do logoff
            }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Feed',
  },
);

export default createAppContainer(signedIn ? App : Sign);

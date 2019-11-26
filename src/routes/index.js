import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';
import Login from '../pages/login';
import Feed from '../pages/feed';
import Header from '../components/header';
import {RightText} from '../components/header/styles';

const AppNavigator = createStackNavigator(
  {
    Register,
    Login,
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
    initialRouteName: 'Register',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);

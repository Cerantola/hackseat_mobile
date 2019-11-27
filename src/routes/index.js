import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../pages/register';
import Feed from '../pages/feed';
import CreatePost from '../pages/feed/components/createPost';
import PostDetails from '../pages/feed/components/post/components/postDetails';
import Login from '../pages/login';
import transitionConfig from '../config/transition';
import Exercicio from '../pages/exercicio';

export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createStackNavigator(
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
        ),
        App: createStackNavigator(
          {
            Feed: {
              screen: Feed,
              navigationOptions: {
                header: null,
              },
            },
            CreatePost: {
              screen: CreatePost,
              navigationOptions: {
                header: null,
              },
            },
            PostDetails: {
              screen: PostDetails,
              navigationOptions: {
                header: null,
              },
            },
            CreateExercise: {
              screen: Exercicio,
              navigationOptions: {
                header: null,
              },
            },
          },
          {
            initialRouteName: 'Feed',
            transitionConfig,
          },
        ),
      },
      {
        initialRouteName: !signedIn ? 'Sign' : 'App',
      },
    ),
  );

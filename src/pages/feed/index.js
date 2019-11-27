import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, List, CreatePost, CreateText} from './styles';
import Header from '../../components/header';
import Post from './components/post';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import {RightText} from '../../components/header/styles';

export default function Feed({navigation}) {
  const [posts, setPosts] = useState(Array.from(Array(6).keys()));

  const renderPost = ({item, index}) => <Post {...item} index={index} />;
  async function logOff() {
    AsyncStorage.removeItem('userLogged');
    const data = await AsyncStorage.getItem('userLogged');
    navigation.navigate('Sign');
  }
  return (
    <Container>
      <Header
        backButton={false}
        rightContent={<RightText>Sair</RightText>}
        rightAction={() => {
          logOff();
        }}
      />

      <List
        data={posts}
        extraData={posts}
        showVerticalIndicator={false}
        renderItem={renderPost}
        keyExtractor={({index}) => index}
        ListHeaderComponent={() => (
          <CreatePost onPress={() => navigation.navigate('CreatePost')}>
            <Icon name={'md-add'} size={22} color={'#ffffff'} />
            <CreateText>Novo post</CreateText>
          </CreatePost>
        )}
      />
    </Container>
  );
}

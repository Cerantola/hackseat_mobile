import React, {useState} from 'react';

import {Container, List, CreatePost, CreateText} from './styles';
import Header from '../../components/header';
import Post from './components/post';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import {RightText} from '../../components/header/styles';

export default function Feed({navigation}) {
  const [posts, setPosts] = useState(Array.from(Array(6).keys()));

  const renderPost = ({item, index}) => <Post {...item} index={index} />;

  return (
    <Container>
      <Header
        backButton={false}
        rightContent={<RightText>Sair</RightText>}
        rightAction={() => {
          // do logoff
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

import React, {useState} from 'react';

import {Container, List, CreatePost, CreateText} from './styles';
import Post from './components/post';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

export default function Feed() {
  const [posts, setPosts] = useState(Array.from(Array(6).keys()));

  const renderPost = ({item, index}) => <Post {...item} index={index} />;

  return (
    <Container>
      <List
        data={posts}
        extraData={posts}
        showVerticalIndicator={false}
        renderItem={renderPost}
        keyExtractor={({index}) => index}
        ListHeaderComponent={() => (
          <CreatePost>
            <Icon name={'md-add'} size={22} color={'#ffffff'} />
            <CreateText>Novo post</CreateText>
          </CreatePost>
        )}
      />
    </Container>
  );
}

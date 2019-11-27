import React, {useState, useEffect} from 'react';

import {Container, List, CreatePost, CreateText, Loading} from './styles';

import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/header';
import Post from './components/post';
import Icon from 'react-native-vector-icons/Ionicons';
import {RightText} from '../../components/header/styles';
import Axios from 'axios';

export default function Feed({navigation}) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    try {
      const {data} = await Axios.get(
        `http://10.100.83.39:3333/post?page=${page}`,
      );
      setPosts(data);
      setPage(page++);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function logOff() {
    AsyncStorage.removeItem('userLogged');
    await AsyncStorage.getItem('userLogged');
    navigation.navigate('Sign');
  }

  useEffect(() => {
    getPosts();
  }, []);

  const renderPost = ({item, index}) => <Post item={item} index={index} />;

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
        ListFooterComponent={() => loading && <Loading />}
      />
    </Container>
  );
}

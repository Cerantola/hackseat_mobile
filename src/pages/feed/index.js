import React, {useState} from 'react';

import {Container, List} from './styles';
import Post from './components/post';

export default function Feed() {
  const [posts, setPosts] = useState([{}]);

  const renderPost = ({item, index}) => <Post {...item} index={index} />;

  return (
    <Container>
      <List
        data={posts}
        extraData={posts}
        showVerticalIndicator={false}
        renderItem={renderPost}
      />
    </Container>
  );
}

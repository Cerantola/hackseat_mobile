import React from 'react';

import Header from '../../../../../../components/header';
import {
  Container,
  PostContainer,
  PostHeader,
  Dificuldade,
  Titulo,
} from './styles';

export default function PostDetails({post}) {
  return (
    <Container>
      <Header
        backButton={true}
        title={'Victor Manuel'}
        rightAction={() => {
          // do logoff
        }}
      />

      <PostContainer>
        <PostHeader>
          <Dificuldade nivel={2} />
          <Titulo>Como funciona um aplicativo</Titulo>
        </PostHeader>
      </PostContainer>
    </Container>
  );
}

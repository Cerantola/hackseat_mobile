import React from 'react';

import Header from '../../../../../../components/header';
import {Container} from './styles';

export default function PostDetails({}) {
  return (
    <Container>
      <Header
        backButton={true}
        title={'Post Details'}
        rightAction={() => {
          // do logoff
        }}
      />
    </Container>
  );
}
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Dificuldade,
  Header,
  Titulo,
  Category,
  Preview,
  Footer,
  Number,
  Avaliacao,
  Separator,
  Desenvolvedor,
  OnPressIcon,
} from './styles';
import {withNavigation} from 'react-navigation';

function Post({navigation, item, index}) {
  const goToPostDetails = () => {
    navigation.navigate('PostDetails', {post: item});
  };

  return (
    <Container key={index} onPress={goToPostDetails}>
      <Header>
        <Dificuldade nivel={item.post_difficulty.level} />
        <Titulo>{item.title}</Titulo>
      </Header>
      <Category>Categoria: {item.post_category.category}</Category>
      <Preview>{item.text}</Preview>

      <Footer>
        <Avaliacao>
          <Number>52</Number>
          <OnPressIcon>
            <Icon name={'like2'} size={22} color={'#232222'} />
          </OnPressIcon>
          <Separator />
          <OnPressIcon>
            <Icon name={'dislike2'} size={22} color={'#232222'} />
          </OnPressIcon>
          <Number>2</Number>
        </Avaliacao>

        <Desenvolvedor>{item.post_author.name}</Desenvolvedor>
      </Footer>
    </Container>
  );
}

export default withNavigation(Post);

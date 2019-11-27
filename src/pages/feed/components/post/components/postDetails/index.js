import React, {useState} from 'react';

import Header from '../../../../../../components/header';
import {
  Container,
  ScrollPage,
  PostContainer,
  PostHeader,
  Difficulty,
  Title,
  DescriptionPost,
  Footer,
  Number,
  Avaliacao,
  Separator,
  ExercisesContainer,
  Exercise,
  ExerciseText,
  OnPressIcon,
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
import {Alert} from 'react-native';

export default function PostDetails({navigation}) {
  const [alternativeActived, setAlternativeActived] = useState(null);
  const post = navigation.getParam('post');
  console.log('post', post);
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title:
        'Com base no post acima, crie um sistema que calcula a raiz quadrada de 4.',
      alternatives: [
        {
          id: 1,
          description: 'Lorem ipsum dolor sit amet.',
          correct: false,
        },
        {
          id: 2,
          description: 'Lorem ipsum dolor sit amet.',
          correct: true,
        },
        {
          id: 3,
          description: 'Lorem ipsum dolor sit amet.',
          correct: false,
        },
        {
          id: 4,
          description: 'Lorem ipsum dolor sit amet.',
          correct: false,
        },
      ],
    },
  ]);

  const selectAlternative = alternative => {
    setAlternativeActived(alternative.id);

    if (alternative.correct) {
      Alert.alert(
        'Parabéns você acertou',
        'Você ganhou pontos por ter respondido certo.',
      );
    } else {
      Alert.alert('Que pena!', 'Você errou, mas não desista. Tente novamente.');
    }
  };

  return (
    <Container>
      <Header
        backButton={true}
        title={post.post_author.name}
        rightAction={() => {
          // do logoff
        }}
      />

      <ScrollPage>
        <PostContainer>
          <PostHeader>
            <Difficulty nivel={post.post_difficulty.level} />
            <Title>{post.title}</Title>
          </PostHeader>

          <DescriptionPost>{post.text}</DescriptionPost>

          <ExercisesContainer>
            {exercises.map(exercise => (
              <Exercise>
                <ExerciseText>{exercise.title}</ExerciseText>

                {exercise.alternatives.map(alternative => (
                  <CheckBox
                    center
                    title={alternative.description}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    checked={alternativeActived == alternative.id}
                    onPress={() => selectAlternative(alternative)}
                  />
                ))}
              </Exercise>
            ))}
          </ExercisesContainer>

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
          </Footer>
        </PostContainer>
      </ScrollPage>
    </Container>
  );
}

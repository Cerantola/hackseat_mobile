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
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
import {Alert} from 'react-native';

export default function PostDetails({post}) {
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
    if (alternative.correct) {
      Alert.alert(
        'Parabéns você acertou.',
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
        title={'Victor Manuel'}
        rightAction={() => {
          // do logoff
        }}
      />

      <ScrollPage>
        <PostContainer>
          <PostHeader>
            <Difficulty nivel={2} />
            <Title>Como funciona um aplicativo</Title>
          </PostHeader>

          <DescriptionPost>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            velit vitae nibh consectetur tincidunt. Sed lacinia consectetur nunc
            nec pretium. Pellentesque facilisis nisi ligula, lobortis fermentum
            quam imperdiet et. In gravida dui odio, vel maximus diam
            sollicitudin at. Aenean iaculis bibendum leo non feugiat. Morbi ac
            tellus efficitur, interdum lorem at, vestibulum elit. Integer tempus
            augue eget ante tincidunt, id maximus augue tincidunt. Praesent
            ultricies, ante eget sodales egestas, mauris dui dictum leo, eget
            rhoncus tellus ante et magna. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Nunc felis massa, dictum interdum mi
            vitae, sagittis pulvinar magna.
          </DescriptionPost>

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
                    // checked={this.state.checked}
                    onPress={() => selectAlternative(alternative)}
                  />
                ))}
              </Exercise>
            ))}
          </ExercisesContainer>

          <Footer>
            <Avaliacao>
              <Number>52</Number>
              <Icon name={'like2'} size={22} color={'#232222'} />
              <Separator />
              <Icon name={'dislike2'} size={22} color={'#232222'} />
              <Number>2</Number>
            </Avaliacao>
          </Footer>
        </PostContainer>
      </ScrollPage>
    </Container>
  );
}

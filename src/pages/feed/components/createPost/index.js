import React, {useState} from 'react';
import RNIcon from 'react-native-vector-icons/Ionicons';

import Header from '../../../../components/header';
import {
  Container,
  ScrollPage,
  TitleDescriptionPostContainer,
  TitleDescriptionPostText,
  InputContainer,
  InputContent,
  Input,
  ButtonAddExercise,
  TextAddExercise,
  Icon,
  ContainerButton,
  Button,
  TextButton,
  ContainerExercisesCreated,
  TitleExerciseContainer,
  TitleExerciseText,
} from './styles';

export default function CreatePost({navigation}) {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: 'Crie uma função que calcula a raiz quadrada de 5',
    },
  ]);

  const addExercise = () => {
    navigation.navigate('CreateExercise');
  };

  return (
    <Container>
      <Header
        backButton={true}
        title={'Criar Post'}
        rightAction={() => {
          // do logoff
        }}
      />

      <ScrollPage>
        <TitleDescriptionPostContainer>
          <TitleDescriptionPostText>
            Digite o conteúdo do post
          </TitleDescriptionPostText>
        </TitleDescriptionPostContainer>

        <InputContainer>
          <InputContent>
            <Input />
          </InputContent>
        </InputContainer>

        {exercises && exercises.length > 0 && (
          <ContainerExercisesCreated>
            <TitleExerciseText>Exercícios criados</TitleExerciseText>

            {exercises.map(exercise => (
              <TitleExerciseContainer>
                <TitleExerciseText>{exercise.title}</TitleExerciseText>
              </TitleExerciseContainer>
            ))}
          </ContainerExercisesCreated>
        )}

        <ButtonAddExercise onPress={addExercise}>
          <TextAddExercise>
            Adicionar exercício{'  '}
            <RNIcon name={'md-add'} size={17} color={'#ffffff'} />
          </TextAddExercise>
        </ButtonAddExercise>
      </ScrollPage>

      <ContainerButton>
        <Button>
          <TextButton>Publicar</TextButton>
        </Button>
      </ContainerButton>
    </Container>
  );
}

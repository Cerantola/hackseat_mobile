import React, {useState} from 'react';

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
  TitleExerciseContent,
  TitleExerciseText,
  TrashExerciseContainer,
  TrashExerciseIcon,
} from './styles';

export default function CreatePost({navigation}) {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      number: 1,
      title: 'Crie uma função que calcula a raiz quadrada de 5',
    },
    {
      id: 2,
      number: 2,
      title: 'Crie um sistema que controla a fatura do cartão',
    },
  ]);

  const addExercise = () => {
    navigation.navigate('CreateExercise');
  };

  const removeExercise = index => {
    const newExercises = [...exercises];

    newExercises.splice(index, 1);
    setExercises(newExercises);
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

            {exercises.map((exercise, index) => (
              <TitleExerciseContainer>
                <TitleExerciseContent>
                  <TitleExerciseText>
                    {exercise.number} - {exercise.title}
                  </TitleExerciseText>
                </TitleExerciseContent>

                <TrashExerciseContainer onPress={() => removeExercise(index)}>
                  <TrashExerciseIcon
                    source={{
                      uri:
                        'https://icons-for-free.com/iconfiles/png/512/trash+bin+icon-1320086460670911435.png',
                    }}
                  />
                </TrashExerciseContainer>
              </TitleExerciseContainer>
            ))}
          </ContainerExercisesCreated>
        )}

        <ButtonAddExercise onPress={addExercise}>
          <TextAddExercise>Adicionar exercício +</TextAddExercise>
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

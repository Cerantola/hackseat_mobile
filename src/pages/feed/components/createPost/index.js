import React, {useState} from 'react';
import {Platform} from 'react-native';

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
  InputTextAreaContainer,
  InputTextAreaContent,
  InputTextArea,
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
  DifficultyContainer,
  DifficultyTextContainer,
  DifficultyText,
  DifficultyButtonText,
  CategoryContainer,
  CategoryContent,
  CategoryIconContainer,
  CategoryIcon,
  Line,
} from './styles';

import {ButtonGroup} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
export default function CreatePost({navigation}) {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: 'Crie uma função que calcula a raiz quadrada de 5',
    },
    {
      id: 2,
      title: 'Crie um sistema que controla a fatura do cartão',
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const button1 = () => <DifficultyButtonText>Facil</DifficultyButtonText>;
  const button2 = () => <DifficultyButtonText>Médio</DifficultyButtonText>;
  const button3 = () => <DifficultyButtonText>Dificil</DifficultyButtonText>;

  const buttons = [{element: button1}, {element: button2}, {element: button3}];
  const categorias = [
    {label: 'Javascript', value: 'javascrip'},
    {label: 'ReactJS', value: 'reactjs'},
    {label: 'React Native', value: 'reactnative'},
  ];

  const updateIndex = selectedIndex => {
    setSelectedIndex(selectedIndex);
  };

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
        <InputContainer>
          <InputContent>
            <Input placeholder={'Digite o titulo'} />
          </InputContent>
        </InputContainer>

        <TitleDescriptionPostContainer>
          <TitleDescriptionPostText>Digite o conteúdo</TitleDescriptionPostText>
        </TitleDescriptionPostContainer>

        <InputTextAreaContainer>
          <InputTextAreaContent>
            <InputTextArea />
          </InputTextAreaContent>
        </InputTextAreaContainer>

        <DifficultyContainer>
          <DifficultyTextContainer>
            <TitleDescriptionPostText>
              Selecione a dificuldade
            </TitleDescriptionPostText>
          </DifficultyTextContainer>

          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{
              height: 50,
              borderColor: '#00c3e0',
            }}
            selectedButtonStyle={{backgroundColor: '#232222'}}
          />
        </DifficultyContainer>

        <TitleDescriptionPostContainer>
          <TitleDescriptionPostText>
            Selecione a categoria
          </TitleDescriptionPostText>
        </TitleDescriptionPostContainer>

        <CategoryContainer>
          <CategoryContent>
            <RNPickerSelect
              style={{color: '#000'}}
              onValueChange={value => console.log(value)}
              placeholder={{
                label: 'Selecionar',
                value: null,
              }}
              items={categorias}
            />
          </CategoryContent>

          <CategoryIconContainer>
            <CategoryIcon>></CategoryIcon>
          </CategoryIconContainer>
        </CategoryContainer>

        {exercises && exercises.length > 0 && (
          <ContainerExercisesCreated>
            <TitleExerciseText>Exercícios criados</TitleExerciseText>

            {exercises.map((exercise, index) => (
              <TitleExerciseContainer key={exercise.id}>
                <TitleExerciseContent>
                  <TitleExerciseText>
                    {index + 1} - {exercise.title}
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

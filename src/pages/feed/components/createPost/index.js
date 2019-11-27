import React, {useState} from 'react';
import {Platform, ActivityIndicator, Alert} from 'react-native';

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
  ErrorText,
} from './styles';

import {ButtonGroup} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Axios from 'axios';

export default function CreatePost({navigation}) {
  const [post, setPost] = useState({exercises: []});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const button1 = () => (
    <DifficultyButtonText selectedIndex={selectedIndex} index={0}>
      Facil
    </DifficultyButtonText>
  );
  const button2 = () => (
    <DifficultyButtonText selectedIndex={selectedIndex} index={1}>
      Médio
    </DifficultyButtonText>
  );
  const button3 = () => (
    <DifficultyButtonText selectedIndex={selectedIndex} index={2}>
      Dificil
    </DifficultyButtonText>
  );

  const buttons = [{element: button1}, {element: button2}, {element: button3}];
  const categorias = [
    {label: 'Javascript', value: 1},
    {label: 'ReactJS', value: 2},
    {label: 'React Native', value: 3},
  ];

  const updateIndex = selectedIndex => {
    setSelectedIndex(selectedIndex);
  };

  const validate = () => {
    let errorField = [];
    !post.title?.length && errorField.push('title');
    post.text?.length < 16 && errorField.push('conteudo');

    return {errorField, error: errorField.length > 0};
  };

  const publicar = async () => {
    const erros = validate();
    if (erros.error) {
      setError(erros.errorField[0]);
      return;
    }

    post.difficulty = selectedIndex + 1;

    try {
      setLoading(true);
      console.warn('alo');
      const data = await Axios.post(
        'http://172.20.10.2:3333/post?user_id=2',
        post,
      );

      if (data.status == 200) {
        setPost({});
        Alert.alert(
          'Post criado com sucesso!',
          null,
          [{text: 'Voltar', onPress: () => navigation.goBack()}],
          {cancelable: true},
        );
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const addExercise = () => {
    navigation.navigate('CreateExercise', {
      addData: handleChangeExercise,
    });
  };

  const removeExercise = index => {
    const newExercises = [...post.exercises];

    newExercises.splice(index, 1);
    setPost({...post, exercises: [...newExercises]});
  };

  const handleChangeText = newData => {
    setPost({...post, ...newData});
    error == 'title' && newData.title && setError(false);
    error == 'conteudo' && newData.text && setError(false);
  };

  const handleChangeExercise = newData => {
    setPost({...post, exercises: [...(post.exercises || []), newData]});
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
            <Input
              value={post.title}
              onChangeText={title => handleChangeText({title})}
              placeholder={'Digite o titulo'}
            />
          </InputContent>
        </InputContainer>

        <TitleDescriptionPostContainer>
          <TitleDescriptionPostText>Digite o conteúdo</TitleDescriptionPostText>
        </TitleDescriptionPostContainer>

        <InputTextAreaContainer>
          <InputTextAreaContent>
            <InputTextArea
              value={post.text}
              onChangeText={text => handleChangeText({text})}
            />
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
            // textStyle={{color: '#232222'}}
            // selectedTextStyle={{color: '#00c3ef'}}
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
              value={post.category}
              onValueChange={category => handleChangeText({category})}
              placeholder={{
                label: 'Selecionar',
                value: null,
              }}
              items={categorias}
            />
          </CategoryContent>
        </CategoryContainer>

        {post.exercises && post.exercises.length > 0 && (
          <ContainerExercisesCreated>
            <TitleExerciseText>Exercícios criados</TitleExerciseText>

            {post.exercises.map((exercise, index) => (
              <TitleExerciseContainer key={exercise.id}>
                <TitleExerciseContent>
                  <TitleExerciseText>
                    {index + 1} - {exercise.text}
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
        {error == 'title' && (
          <ErrorText>Adicione um título para seu post</ErrorText>
        )}
        {error == 'conteudo' && (
          <ErrorText>Adicione um conteúdo para seu post</ErrorText>
        )}
        <Button onPress={publicar}>
          {loading ? (
            <ActivityIndicator size={'small'} color={'#FFF'} />
          ) : (
            <TextButton>Publicar</TextButton>
          )}
        </Button>
      </ContainerButton>
    </Container>
  );
}

import React, {useState} from 'react';

import {
  Container,
  InputContainer,
  List,
  Questao,
  Correto,
  QuestaoInput,
  QuestaoText,
  NovaOpcao,
  BotoesContainer,
  Botao,
} from './styles';
import Header from '../../components/header';
import {
  ScrollPage,
  TitleDescriptionPostContainer,
  TitleDescriptionPostText,
  InputContent,
  Input,
  ButtonAddExercise,
  TextAddExercise,
  ContainerButton,
  Button,
  TextButton,
  ErrorText,
} from '../feed/components/createPost/styles';
import RNIcon from 'react-native-vector-icons/Ionicons';
import Opcao from './components/opcao';

export default function Exercicio({navigation}) {
  const [opcoes, setOpcoes] = useState([]);
  const [novaOpcao, setNovaOpcao] = useState(false);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');

  const adicionarOpcao = () => {
    setNovaOpcao(false);
    setOpcoes([...opcoes, novaOpcao]);
  };

  const handleChangeNovaOpcaoText = text => {
    setNovaOpcao({...novaOpcao, text});
  };

  const removeOpcao = index => {
    setOpcoes([...opcoes.filter((e, i) => i != index)]);
  };

  const handleChangeCorrectAnswer = (index, novo = false) => {
    error == 'correct' && setError(false);
    let correctIndex = opcoes.findIndex(e => e.correct);
    const _opcoes = [...opcoes];
    try {
      _opcoes[correctIndex].correct = false;
    } catch (error) {}
    novaOpcao && setNovaOpcao({...novaOpcao, correct: novo});

    if (index >= 0) _opcoes[index].correct = true;

    setOpcoes([..._opcoes]);
  };

  const handleSetTitle = text => {
    setTitle(text);
    error == 'title' && setError(false);
  };

  const validateFields = () => {
    let errorField = [];
    !title.length && errorField.push('title');
    opcoes.length < 2 && errorField.push('no_options');
    !opcoes.filter(e => e.correct).length && errorField.push('correct');

    return {errorField, error: errorField.length > 0};
  };

  const adicionaExercicio = () => {
    const errors = validateFields();

    if (errors.error) {
      setError(errors.errorField[0]);
      return;
    }

    const addData = navigation.getParam('addData');
    let correctIndex = opcoes.findIndex(e => e.correct);
    addData({
      text: title,
      correct_value: opcoes[correctIndex].text,
      options: opcoes,
    });

    navigation.goBack();
  };

  const handleNovaAlternativa = () => {
    setNovaOpcao({});
    error == 'no_options' && setError(false);
  };

  const renderOpcao = ({item, index}) => (
    <Opcao
      index={index}
      item={item}
      novo={false}
      handleChangeCorrectAnswer={handleChangeCorrectAnswer}
      removeOpcao={removeOpcao}
    />
  );

  return (
    <>
      <Header title="Adicionar exercícios" />
      <Container>
        <TitleDescriptionPostContainer>
          <TitleDescriptionPostText>
            Adicione um texto ao seu exercício
          </TitleDescriptionPostText>
        </TitleDescriptionPostContainer>

        <InputContainer>
          <InputContent>
            <Input
              numberOfLines={2}
              value={title}
              onChangeText={handleSetTitle}
              blurOnSubmit={true}
            />
          </InputContent>
        </InputContainer>

        <List
          data={opcoes}
          renderItem={renderOpcao}
          keyExtractor={({index}) => index}
          ListFooterComponent={() => (
            <>
              {novaOpcao != false && (
                <NovaOpcao>
                  <Opcao
                    index={-1}
                    item={novaOpcao}
                    novo={true}
                    handleChangeCorrectAnswer={handleChangeCorrectAnswer}
                    removeOpcao={removeOpcao}
                    changeText={handleChangeNovaOpcaoText}
                    adicionarOpcao={adicionarOpcao}
                    full
                  />

                  <BotoesContainer>
                    <Botao onPress={() => setNovaOpcao(false)}>
                      <RNIcon name={'md-trash'} size={22} color={'#fff'} />
                    </Botao>
                    <Botao bcolor={'#2bed38'} onPress={adicionarOpcao}>
                      <RNIcon name={'md-checkmark'} size={22} color={'#fff'} />
                    </Botao>
                  </BotoesContainer>
                </NovaOpcao>
              )}
              {!novaOpcao && opcoes.length < 4 && (
                <ButtonAddExercise onPress={() => handleNovaAlternativa()}>
                  <TextAddExercise>
                    Adicionar alternativa{'  '}
                    <RNIcon name={'md-add'} size={17} color={'#ffffff'} />
                  </TextAddExercise>
                </ButtonAddExercise>
              )}
            </>
          )}
        />

        <ContainerButton>
          {error == 'title' && (
            <ErrorText>Adicione um título para seu exercício</ErrorText>
          )}
          {error == 'no_options' && (
            <ErrorText>Adicione pelo menos duas alternativa</ErrorText>
          )}
          {error == 'correct' && (
            <ErrorText>Adicione pelo menos uma alternativa correta</ErrorText>
          )}
          <Button onPress={adicionaExercicio}>
            <TextButton>Adicionar</TextButton>
          </Button>
        </ContainerButton>
      </Container>
    </>
  );
}

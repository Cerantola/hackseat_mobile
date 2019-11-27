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
} from '../feed/components/createPost/styles';
import RNIcon from 'react-native-vector-icons/Ionicons';

export default function Exercicio() {
  const [opcoes, setOpcoes] = useState([{}, {}]);
  const [novaOpcao, setNovaOpcao] = useState(false);

  const adicionarOpcao = () => {
    setNovaOpcao(false);
    setOpcoes([...opcoes, {}]);
  };

  const removeOpcao = index => {
    setOpcoes([...opcoes.filter((e, i) => i != index)]);
  };

  const handleChangeCorrectAnswer = (index, novo = false) => {
    try {
      let correctIndex = opcoes.findIndex(e => e.correct);
      const _opcoes = [...opcoes];
      _opcoes[correctIndex].correct = false;
      novaOpcao && setNovaOpcao({...novaOpcao, correct: novo});

      if (index >= 0) _opcoes[index].correct = true;

      setOpcoes([..._opcoes]);
    } catch (error) {}
  };

  const renderOpcao = ({item, index}) => (
    <Questao key={index}>
      <Correto
        correct={item.correct}
        onPress={() => handleChangeCorrectAnswer(-1, true)}>
        <RNIcon
          name={'md-checkmark'}
          size={22}
          color={item.correct ? '#fff' : '#babaca'}
        />
      </Correto>
      <QuestaoText> Testinho</QuestaoText>
      <Botao onPress={() => removeOpcao(index)}>
        <RNIcon name={'md-trash'} size={22} color={'#fff'} />
      </Botao>
    </Questao>
  );

  return (
    <>
      <Header title="Adicionar exercícios" />
      <Container>
        <ScrollPage>
          <TitleDescriptionPostContainer>
            <TitleDescriptionPostText>
              Adicione um texto ao seu exercício
            </TitleDescriptionPostText>
          </TitleDescriptionPostContainer>

          <InputContainer>
            <InputContent>
              <Input numberOfLines={2} />
            </InputContent>
          </InputContainer>

          <List
            data={opcoes}
            renderItem={renderOpcao}
            keyExtractor={({index}) => index}
          />

          {novaOpcao != false && (
            <NovaOpcao>
              <Questao width={'100%'}>
                <Correto
                  correct={novaOpcao != false && novaOpcao.correct}
                  onPress={() => handleChangeCorrectAnswer(-1, true)}>
                  <RNIcon name={'md-checkmark'} size={22} color={'#babaca'} />
                </Correto>
                <QuestaoInput />
              </Questao>

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
            <ButtonAddExercise onPress={() => setNovaOpcao(true)}>
              <TextAddExercise>
                Adicionar alternativa{'  '}
                <RNIcon name={'md-add'} size={17} color={'#ffffff'} />
              </TextAddExercise>
            </ButtonAddExercise>
          )}
        </ScrollPage>

        <ContainerButton>
          <Button>
            <TextButton>Adicionar</TextButton>
          </Button>
        </ContainerButton>
      </Container>
    </>
  );
}

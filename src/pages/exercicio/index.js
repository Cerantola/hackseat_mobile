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
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Exercicio() {
  const [opcoes, setOpcoes] = useState([{}, {}]);
  const [novaOpcao, setNovaOpcao] = useState(false);

  const renderOpcao = ({index}) => (
    <Questao>
      <Correto index={index}>
        <RNIcon
          name={'md-checkmark'}
          size={22}
          color={index == 0 ? '#fff' : '#babaca'}
        />
      </Correto>
      <QuestaoText> Testinho</QuestaoText>
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

          <List data={opcoes} renderItem={renderOpcao} />

          {novaOpcao && (
            <NovaOpcao>
              <Questao width={'100%'}>
                <Correto>
                  <RNIcon name={'md-checkmark'} size={22} color={'#babaca'} />
                </Correto>
                <QuestaoInput />
              </Questao>

              <BotoesContainer>
                <Botao onPress={() => setNovaOpcao(false)}>
                  <RNIcon name={'md-trash'} size={22} color={'#fff'} />
                </Botao>
                <Botao
                  bcolor={'#2bed38'}
                  onPress={() => {
                    setNovaOpcao(false);
                    setOpcoes([...opcoes, {}]);
                  }}>
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

import React from 'react';
import {View} from 'react-native';
import {Questao, Correto, QuestaoText, Botao, QuestaoInput} from '../../styles';

import RNIcon from 'react-native-vector-icons/Ionicons';
// import { Container } from './styles';

export default function Opcao({
  item,
  index,
  novo = false,
  full = false,
  removeOpcao = () => {},
  handleChangeCorrectAnswer = () => {},
  value = '',
  changeText = () => {},
  adicionarOpcao = () => {},
}) {
  return (
    <Questao key={index} width={full && '100%'}>
      <Correto
        correct={item?.correct}
        onPress={() => handleChangeCorrectAnswer(index, novo)}>
        <RNIcon
          name={'md-checkmark'}
          size={22}
          color={item.correct ? '#fff' : '#babaca'}
        />
      </Correto>
      {novo ? (
        <QuestaoInput
          onSubmitEditing={adicionarOpcao}
          onChangeText={changeText}
          value={item.text}
        />
      ) : (
        <>
          <QuestaoText>{item.text}</QuestaoText>
          <Botao onPress={() => removeOpcao(index)}>
            <RNIcon name={'md-trash'} size={22} color={'#fff'} />
          </Botao>
        </>
      )}
    </Questao>
  );
}

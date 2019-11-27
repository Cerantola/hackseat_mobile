import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 70px;
  padding-horizontal: 20px;
  border-radius: 3px;
`;

export const List = styled.FlatList`
  margin-top: 15px;
`;

export const Questao = styled.View`
  width: ${({width}) => width || '90%'};
  background-color: #fff;
  margin-top: 10px;
  border-radius: 8px;
  align-self: center;
  flex-direction: row;
  align-items: center;
`;

export const Correto = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  border-width: 1px;
  margin: 5px;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-color: ${({correct}) => (correct ? '#fff' : '#babaca')};
  background-color: ${({correct}) => (correct ? '#2bed38' : 'transparent')};
  border-radius: 35px;
`;

export const QuestaoInput = styled.TextInput`
  flex: 1;
  padding-horizontal: 10px;
  border-bottom-width: 1;
  margin: 7px 10px;
  height: 45px;
`;

export const QuestaoText = styled.Text`
  font-size: 17px;
  flex: 1;
`;

export const NovaOpcao = styled.View`
  width: 90%;
  align-items: flex-end;
  align-self: center;
`;

export const BotoesContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const Botao = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  margin: 5px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${({bcolor}) => bcolor || '#f22929'};
  border-radius: 45px;
`;

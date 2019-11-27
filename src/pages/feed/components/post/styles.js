import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  margin: 12px 0;
  border-width: 1px;
  border-color: #babaca;
  border-radius: 3px;
  width: 85%;
  align-self: center;
  background-color: #f5f5f5;
`;

export const Header = styled.View`
  width: 95%;
  padding: 10px 5px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  border-bottom-width: 1px;
  border-bottom-color: #232222;
`;

export const Dificuldade = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: ${({dificultyLevel}) => getDificultyColor(dificultyLevel)};
  margin-right: 10px;
`;

export const Titulo = styled.Text`
  color: #232222;
  font-size: 16px;
`;

export const Preview = styled.Text.attrs(() => ({
  numberOfLines: 4,
}))`
  color: #232222;
  font-size: 13px;
  margin: 9px 16px;
  line-height: 20px;
`;

export const Category = styled.Text`
  color: #232222;
  font-size: 13px;
  margin-top: 5px;
  margin-horizontal: 16px;
  line-height: 20px;
`;

export const Footer = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: flex-end;
  align-self: center;
  width: 95%;
  padding-bottom: 9px;
  justify-content: space-between;
`;

export const Number = styled.Text`
  color: #232222;
  font-size: 14px;
  margin: 0 5px;
`;

export const Separator = styled.View`
  height: 20px;
  border-left-width: 2px;
  border-color: #232222;
  margin: 0 10px;
`;

export const Avaliacao = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Desenvolvedor = styled.Text`
  color: #232222;
  font-size: 14px;
`;

export const OnPressIcon = styled.TouchableOpacity``;

function getDificultyColor(level) {
  return level == 'avançado'
    ? '#f22929'
    : level == 'intermediário'
    ? '#f0e32e'
    : '#2bed38';
}

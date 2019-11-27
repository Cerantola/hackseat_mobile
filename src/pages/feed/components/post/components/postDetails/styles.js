import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const PostContainer = styled.TouchableOpacity.attrs(() => ({
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

export const PostHeader = styled.View`
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
  background-color: ${({dificultyLevel = 2}) =>
    getDificultyColor(dificultyLevel)};
  margin-right: 10px;
`;

export const Titulo = styled.Text`
  color: #232222;
  font-size: 16px;
`;

function getDificultyColor(level) {
  return level == 0 ? '#f22929' : level == 1 ? '#f0e32e' : '#2bed38';
}

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const ScrollPage = styled.ScrollView`
  flex: 1;
`;

export const TitleDescriptionPostContainer = styled.View`
  width: 100%;
  padding-horizontal: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const TitleDescriptionPostText = styled.Text`
  font-size: 16px;
  color: #c1c1c1;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 150px;
  padding-horizontal: 20px;
  border-radius: 3px;
`;

export const InputContent = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: #fff;
`;

export const Input = styled.TextInput.attrs(({multiline, numberOfLines}) => ({
  multiline: multiline || true,
  numberOfLines: numberOfLines || 4,
}))`
  flex: 1;
  padding-horizontal: 10px;
`;

export const ButtonAddExercise = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  padding: 20px;
`;

export const TextAddExercise = styled.Text`
  font-size: 16px;
  color: #c1c1c1;
`;

export const ContainerButton = styled.View`
  width: 100%;
  padding: 20px;
  bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: #00c3e0;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const ContainerExercisesCreated = styled.View`
  width: 100%;
  padding: 20px;
`;

export const TitleExerciseContainer = styled.View`
  width: 100%;
`;

export const TitleExerciseText = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  font-size: 18px;
  color: #c1c1c1;
  font-weight: bold;
  margin-top: 10px;
`;

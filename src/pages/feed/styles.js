import styled from 'styled-components';
import {LogoImage} from '../../assets';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const List = styled.FlatList`
  flex: 1;
  margin-top: 15px;
`;

export const CreatePost = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  width: 85%;
  border-radius: 3px;
  background-color: #00c3ef;
  padding: 10px 0;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3px;
`;

export const CreateText = styled.Text`
  font-size: 18px;
  margin: 0 8px;
  color: #fff;
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  size: 'large',
  color: '#00c3ef',
}))`
  margin-vertical: 10px;
`;

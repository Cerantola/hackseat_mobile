import styled from 'styled-components/native';
import {ArrowLeft, LogoImage} from '../../assets';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  height: 60px;
  background-color: #232222;
  padding-top: ${getStatusBarHeight()}px;
`;

export const InfoContainer = styled.View`
  width: 98%;
  height: 100%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Clickable = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: transparent;
`;

export const Back = styled.Image.attrs(() => ({
  source: ArrowLeft,
  resizeMode: 'contain',
}))`
  width: 35px;
  height: 35px;
  tint-color: #fff;
`;

export const Logo = styled.Image.attrs(() => ({
  source: LogoImage,
  resizeMode: 'contain',
}))`
  height: 65px;
  width: 130px;
`;

export const RightText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
`;

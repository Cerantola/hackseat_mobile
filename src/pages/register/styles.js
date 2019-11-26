import styled from 'styled-components';
import {LogoImage} from '../../assets';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #232222;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs(() => ({
  source: LogoImage,
  resizeMode: 'contain',
}))`
  width: 60%;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 50px;
  margin-left: 2.5%;
  border-radius: 3px;
  background-color: #fff;
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-horizontal: 10px;
`;

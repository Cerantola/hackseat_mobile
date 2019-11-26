import React from 'react';

import {
  Container,
  InfoContainer,
  Clickable,
  Back,
  Logo,
  Title,
  SafeContainer,
} from './styles';
import {View} from 'react-native';

export default function Header({
  backButton = true,
  title = false,
  rightContent = () => {},
  rightAction = () => {},
}) {
  return (
    <>
      <SafeContainer />
      <Container>
        <InfoContainer>
          <Clickable>{backButton && <Back />}</Clickable>

          {title ? <Title>{title}</Title> : <Logo />}

          <View>
            <Clickable onPress={rightAction}>{rightContent}</Clickable>
          </View>
        </InfoContainer>
      </Container>
    </>
  );
}

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
import {withNavigation} from 'react-navigation';

function Header({
  backButton = true,
  title = false,
  rightContent = () => {},
  rightAction = () => {},
  navigation,
}) {
  return (
    <>
      <SafeContainer />
      <Container>
        <InfoContainer>
          <Clickable onPress={() => navigation.goBack()}>
            {backButton && <Back />}
          </Clickable>

          {title ? <Title>{title}</Title> : <Logo />}

          <View>
            <Clickable onPress={rightAction}>{rightContent}</Clickable>
          </View>
        </InfoContainer>
      </Container>
    </>
  );
}

export default withNavigation(Header);

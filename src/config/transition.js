import React from 'react';
import {Dimensions, Easing, Animated} from 'react-native';

const {width, height} = Dimensions.get('screen');

const fadeTransition = (index, position) => {
  const transition = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });

  return {
    opacity: transition,
  };
};

const rightToLeft = (index, position) => {
  const transition = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  return {
    transform: [{translateX: transition}],
  };
};

const bottomTransition = (index, position) => {
  const transition = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });

  return {
    transform: [{translateY: transition}],
  };
};

const TransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 400,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {position, scene} = sceneProps;
      const {index, route} = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        default: rightToLeft(index, position),
        fadeTransition: fadeTransition(index, position),
        bottomTransition: bottomTransition(index, position),
        rightToLeft: rightToLeft(index, position, width),
      }[transition];
    },
  };
};

export default TransitionConfig;

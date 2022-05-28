import {Animated, Easing, Text, View} from 'react-native';

import React from 'react';
import styles, {root} from '../styles/global.styles';

const Loader = () => {
  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.loader}>
      <Animated.Image
        source={require('../assets/icons/loader.png')}
        style={{transform: [{rotate: spin}]}}
      />
      <Text style={{marginLeft: root.padding}}>Loading Data</Text>
    </View>
  );
};

export default Loader;

import {Text, Pressable, View} from 'react-native';
import React from 'react';
import styles, {root} from '../styles/global.styles';

const Button = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: (e?: any) => void;
}) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{color: root.rippleOverlay}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

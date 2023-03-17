import type { FC } from 'react';
import React from 'react';
import { View, TouchableOpacity, ButtonProps } from 'react-native';
import Text from '../Text/Text';

import styles from './Button.style';

interface IProps extends ButtonProps {
  title: string;
  onPress(): void;
}

const Button: FC<IProps> = ({ title, onPress, ...buttonProps }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      {...buttonProps}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

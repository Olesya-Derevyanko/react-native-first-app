import type { FC } from 'react';
import React from 'react';
import { View, TouchableOpacity, ButtonProps } from 'react-native';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import Text from '../Text/Text';

import createStyles from './Button.style';

interface IProps extends ButtonProps {
  title: string;
  onPress(): void;
}

const Button: FC<IProps> = ({ title, onPress, ...buttonProps }) => {
  const styles = useThemeAwareObject(createStyles);
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

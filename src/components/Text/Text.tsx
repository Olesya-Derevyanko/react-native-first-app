import type { FC } from 'react';
import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import styles from './Text.style';

interface IProps extends TextProps {
  style?: any;
  isHeader?: boolean;
}

const Text: FC<IProps> = ({ style, isHeader, children, ...textProps }) => {
  return (
    <RNText
      style={[isHeader ? styles.header : styles.text, style]}
      {...textProps}>
      {children}
    </RNText>
  );
};

export default Text;

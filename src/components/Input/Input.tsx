import { FC, useEffect, useState } from 'react';
import React from 'react';
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  TextInputProps,
} from 'react-native';

import styles from './Input.style';
import { Noop } from 'react-hook-form';
import Text from '../Text/Text';

interface IProps extends TextInputProps {
  textValue: string;
  placeHolder: string;
  error?: string;
  onChangeText(newText: string): void;
  onBlur?: Noop;
  type?: KeyboardTypeOptions;
  isPassword?: boolean;
}

const Input: FC<IProps> = props => {
  const {
    textValue,
    onChangeText,
    placeHolder,
    error,
    type,
    isPassword,
    ...inputProps
  } = props;
  const [activeStyle, setActiveStyle] = useState({});
  const [isFocus, setIsFocus] = useState(false);

  const onSetStyles = () => {
    setIsFocus(true);
    setActiveStyle(styles.inputActive);
  };
  const onUnsetStyles = () => {
    if (error) {
      setActiveStyle(styles.inputError);
    } else {
      setActiveStyle({});
    }
    if (props.onBlur) {
      props.onBlur();
    }
    setIsFocus(false);
  };

  useEffect(() => {
    if (error?.length && !isFocus) {
      setActiveStyle(styles.inputError);
    }
  }, [error, isFocus]);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textSection}>
        <Text>{placeHolder}</Text>
      </View>
      <View style={styles.section}>
        <TextInput
          {...inputProps}
          keyboardType={type}
          onFocus={onSetStyles}
          onBlur={onUnsetStyles}
          style={[styles.input, activeStyle]}
          onChangeText={onChangeText}
          defaultValue={textValue}
          secureTextEntry={isPassword}
        />
      </View>
      {error?.length && (
        <View style={styles.textSection}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

import { FC, useEffect, useState } from 'react';
import React from 'react';
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import createStyles from './Input.style';
import { Noop } from 'react-hook-form';
import Text from '../Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';

interface IProps extends TextInputProps {
  textValue: string;
  placeHolder: string;
  error?: string;
  onBlur?: Noop;
  type?: KeyboardTypeOptions;
  isPassword?: boolean;
}

const Input: FC<IProps> = props => {
  const styles = useThemeAwareObject(createStyles);
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

  const onSetStyles = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(true);
    setActiveStyle(styles.inputActive);
    inputProps?.onFocus?.(e);
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
    inputProps?.onBlur?.();
  };

  useEffect(() => {
    if (error?.length && !isFocus) {
      setActiveStyle(styles.inputError);
    }
  }, [error, isFocus, styles.inputError]);

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

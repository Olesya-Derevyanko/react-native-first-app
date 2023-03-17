import { FC, useEffect, useState } from 'react';
import React from 'react';
import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';

import StyledInputStyles from './StyledInput.style';
import { Noop } from 'react-hook-form';

type PropType = {
  textValue: string;
  placeHolder: string;
  error?: string;
  onChange(newText: string): void;
  isTouched?: boolean;
  onBlur?: Noop;
  type?: KeyboardTypeOptions;
  isPassword?: boolean;
};

const StyledInput: FC<PropType> = props => {
  const {
    textValue,
    onChange,
    placeHolder,
    error,
    type,
    isTouched,
    isPassword,
  } = props;
  const [activeStyle, setActiveStyle] = useState({});
  const [isFocus, setIsFocus] = useState(false);

  const onSetStyles = () => {
    setIsFocus(true);
    setActiveStyle(StyledInputStyles.inputActive);
  };
  const onUnsetStyles = () => {
    if (error) {
      setActiveStyle(StyledInputStyles.inputError);
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
      setActiveStyle(StyledInputStyles.inputError);
    }
  }, [error, isFocus, isTouched]);

  return (
    <View style={StyledInputStyles.inputContainer}>
      <View style={StyledInputStyles.textSection}>
        <Text>{placeHolder}</Text>
      </View>
      <View style={StyledInputStyles.section}>
        <TextInput
          keyboardType={type}
          onFocus={onSetStyles}
          onBlur={onUnsetStyles}
          style={{ ...StyledInputStyles.input, ...activeStyle }}
          onChangeText={onChange}
          defaultValue={textValue}
          secureTextEntry={isPassword}
        />
      </View>
      {error?.length && isTouched ? (
        <View style={StyledInputStyles.textSection}>
          <Text style={StyledInputStyles.errorText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default StyledInput;

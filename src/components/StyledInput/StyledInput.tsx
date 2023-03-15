import { FC, useState } from 'react';
import React from 'react';
import { View, Text, TextInput } from 'react-native';

import StyledInputStyles from './StyledInput.style';

type PropType = {
  textValue: string;
  placeHolder: string;
  error?: string;
  onChange(newText: string): void;
};

const StyledInput: FC<PropType> = ({
  textValue,
  onChange,
  placeHolder,
  error,
}) => {
  const [activeStyle, setActiveStyle] = useState({});

  const onSetStyles = () => {
    setActiveStyle(StyledInputStyles.inputActive);
  };
  const onUnsetStyles = () => {
    setActiveStyle({});
  };
  return (
    <View style={StyledInputStyles.inputContainer}>
      <View>
        <Text>{placeHolder}</Text>
      </View>
      <View style={{ ...StyledInputStyles.section }}>
        <TextInput
          onFocus={onSetStyles}
          onBlur={onUnsetStyles}
          style={{ ...StyledInputStyles.input, ...activeStyle }}
          onChangeText={onChange}
          defaultValue={textValue}
        />
      </View>
      {error ? (
        <View style={{ ...StyledInputStyles.section }}>
          <Text>error</Text>
        </View>
      ) : null}
    </View>
  );
};

export default StyledInput;

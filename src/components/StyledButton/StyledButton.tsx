import type { FC } from 'react';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import StyledButtonStyles from './StyledButton.style';

type PropType = {
  textValue: string;
  onPress(): void;
};

const StyledButton: FC<PropType> = ({ textValue, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={StyledButtonStyles.container}>
      <View style={StyledButtonStyles.buttonContainer}>
        <Text style={StyledButtonStyles.buttonText}>{textValue}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StyledButton;

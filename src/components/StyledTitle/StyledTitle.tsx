import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Text } from 'react-native';

import StyledTitleStyles from './StyledTitle.style';

type PropType = {
  style?: any;
} & PropsWithChildren;

const StyledTitle: FC<PropType> = props => {
  return (
    <Text style={{ ...StyledTitleStyles.header, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default StyledTitle;

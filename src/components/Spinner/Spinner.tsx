import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import LoadingIcon from '../../assets/icons/loading.svg';

import createStyles from './Spinner.style';

const spin = (spinValue: Animated.Value) => {
  spinValue.setValue(0);

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start(() => spin(spinValue));
};

const Spinner = () => {
  const styles = useThemeAwareObject(createStyles);
  let spinValue = new Animated.Value(0);
  useEffect(() => {
    spin(spinValue);
  });
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.View style={[styles.container, { transform: [{ rotate }] }]}>
      <LoadingIcon color={styles.spinner.color} />
    </Animated.View>
  );
};

export default Spinner;

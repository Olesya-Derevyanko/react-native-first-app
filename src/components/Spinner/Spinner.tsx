import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';

import createStyles from './Spinner.style';

const Spinner = () => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={styles.spinner.color} />
    </View>
  );
};

export default Spinner;

import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 10,
    },

    spinner: {
      color: theme.colors.primary,
    },
  });
  return styles;
};

export default createStyles;

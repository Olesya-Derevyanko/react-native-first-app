import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
    },

    spinner: {
      color: theme.colors.primary,
    },
  });
  return styles;
};

export default createStyles;

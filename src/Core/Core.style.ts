import { StyleSheet } from 'react-native';
import { Theme } from '../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    loadingContainer: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
    },
  });
  return styles;
};

export default createStyles;

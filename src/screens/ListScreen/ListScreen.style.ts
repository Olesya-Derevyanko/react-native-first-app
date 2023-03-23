import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
      width: '100%',
    },
    section: {
      paddingTop: 15,
    },

    lastSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return styles;
};

export default createStyles;

import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
    },
    section: {
      paddingTop: 15,
    },

    sectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15,
    },

    subTitle: {
      fontSize: 16,
      fontWeight: '800',
      textTransform: 'uppercase',
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

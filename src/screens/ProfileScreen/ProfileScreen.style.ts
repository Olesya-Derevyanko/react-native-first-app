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

    lastSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    topTabBar: {
      backgroundColor: theme.colors.background,
    },

    topTabIndicator: {
      backgroundColor: theme.colors.textColor,
    },

    tabText: {
      color: theme.colors.textColor,
      textTransform: 'capitalize',
      fontSize: 15,
      fontWeight: '600',
    },
  });
  return styles;
};

export default createStyles;

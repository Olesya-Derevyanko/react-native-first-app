import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundInput,
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      paddingTop: 10,
      paddingBottom: 15,

      shadowOffset: { width: 0, height: -10 },
      shadowColor: theme.colors.default,
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    tabSectionActive: {
      zIndex: 500,
      flex: 1,
      alignItems: 'center',
    },
    tabSectionInactive: {
      zIndex: 500,
      flex: 1,
      alignItems: 'center',
    },

    activeIcon: {
      color: theme.colors.primary,
    },
    inactiveIcon: {
      color: theme.colors.default,
    },
  });
  return styles;
};

export default createStyles;

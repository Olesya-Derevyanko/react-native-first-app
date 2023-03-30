import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundInput,
      alignItems: 'center',
      alignSelf: 'stretch',
      flexDirection: 'row',
      paddingTop: 55,
      paddingBottom: 15,

      shadowOffset: { width: 0, height: 10 },
      shadowColor: theme.colors.default,
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    mainContainer: {
      flex: 1,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    title: {
      fontFamily: 'NotoSans-Black',
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: '700',
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
    plug: {
      width: 35,
      height: 35,
    },

    inactiveIcon: {
      color: theme.colors.default,
    },
  });
  return styles;
};

export default createStyles;

import { StyleSheet } from 'react-native';
import { Theme } from '../../../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: 20,
    },
    section: {
      paddingTop: 25,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    centerSection: {
      paddingTop: 25,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },

    lastSection: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    trackColorTrue: {
      color: theme.colors.active,
    },
    trackColorFalse: {
      color: theme.colors.disable,
    },

    thumbColorTrue: {
      color: theme.colors.primary,
    },
    thumbColorFalse: {
      color: theme.colors.background,
    },

    iosBackgroundColor: {
      color: theme.colors.active,
    },
  });
  return styles;
};

export default createStyles;

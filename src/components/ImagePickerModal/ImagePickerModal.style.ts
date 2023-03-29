import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'center',
    },
    contentArea: {
      display: 'flex',
      backgroundColor: theme.colors.background,
      borderRadius: 25,
      padding: 10,
      margin: 20,
      alignItems: 'center',
    },

    modalSection: {
      margin: 20,
    },

    avatarArea: {
      width: 200,
      height: 200,
      backgroundColor: theme.colors.active,
      borderRadius: 25,
      justifyContent: 'center',
    },

    icon: {
      color: theme.colors.background,
      alignSelf: 'center',
      borderRadius: 25,
    },

    buttonsArea: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
  return styles;
};

export default createStyles;

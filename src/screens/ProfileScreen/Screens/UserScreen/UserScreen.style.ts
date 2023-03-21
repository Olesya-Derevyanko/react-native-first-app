import { StyleSheet } from 'react-native';
import { Theme } from '../../../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
    },

    infoArea: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
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

    avatarArea: {
      width: 250,
      height: 250,
      backgroundColor: theme.colors.active,
      borderRadius: 25,
      justifyContent: 'center',
    },

    avatarPhoto: {
      alignSelf: 'center',
      color: theme.colors.primary,
      borderRadius: 25,
    },

    changeAvatar: {
      width: 40,
      height: 40,
      position: 'absolute',
      backgroundColor: theme.colors.background,
      color: theme.colors.textColor,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 10,
      right: 10,
      zIndex: 500,
    },
  });
  return styles;
};

export default createStyles;

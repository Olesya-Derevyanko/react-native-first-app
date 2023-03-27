import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    loadingContainer: {
      backgroundColor: theme.colors.background,
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      alignSelf: 'stretch',
    },

    mainContainer: {
      flex: 1,
      alignItems: 'center',
    },

    marginContent: {
      margin: 20,
    },

    episodeContainer: {
      display: 'flex',
      flexDirection: 'row',
    },

    imageSection: {
      flex: 1,
      borderRadius: 25,
      width: 300,
      height: 300,
    },

    marginSection: {
      marginTop: 10,
    },

    infoSection: {
      flex: 1,
    },

    title: {
      fontSize: 19,
      fontWeight: '700',
    },

    subTitle: {
      color: theme.colors.primary,
    },
  });
  return styles;
};

export default createStyles;

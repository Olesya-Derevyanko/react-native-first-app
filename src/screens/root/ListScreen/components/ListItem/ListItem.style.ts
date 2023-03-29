import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
      borderRadius: 25,
      backgroundColor: theme.colors.backgroundInput,
    },

    marginContent: {
      margin: 20,
    },

    imageSection: {
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      width: '100%',
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

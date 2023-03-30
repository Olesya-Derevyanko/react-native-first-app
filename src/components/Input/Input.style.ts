import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    inputContainer: {
      paddingHorizontal: 25,
    },
    textSection: {
      paddingLeft: 16,
    },
    section: {
      marginTop: 5,
    },
    input: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 25,
      borderColor: theme.colors.default,
      borderWidth: 1,
      color: theme.colors.textColor,
      backgroundColor: theme.colors.backgroundInput,
    },

    inputActive: {
      borderColor: theme.colors.active,
    },

    inputError: {
      borderColor: theme.colors.error,
    },

    errorText: {
      fontFamily: 'NotoSans-Black',
      color: theme.colors.error,
      fontSize: 12,
    },
  });
  return styles;
};

export default createStyles;

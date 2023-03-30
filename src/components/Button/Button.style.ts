import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      borderRadius: 25,
    },
    buttonContainer: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 25,
      alignItems: 'center',
      alignSelf: 'center',
    },

    buttonText: {
      fontFamily: 'NotoSans-Black',
      color: theme.colors.buttonTextColor,
      fontSize: 18,
      fontWeight: '800',
    },
  });
  return styles;
};

export default createStyles;

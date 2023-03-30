import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme.interface';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    header: {
      fontFamily: 'NotoSans-Black',
      color: theme.colors.titleColor,
      fontSize: 30,
      fontWeight: '900',
      alignSelf: 'center',
    },
    text: {
      fontFamily: 'NotoSans-Medium',
      color: theme.colors.textColor,
      fontSize: 15,
      fontWeight: '500',
    },
  });
  return styles;
};

export default createStyles;

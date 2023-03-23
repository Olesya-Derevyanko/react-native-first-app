import React from 'react';
import { SafeAreaView } from 'react-native';
import createStyles from './HomeScreen.style';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const HomeScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { logout } = useCurrentUser();

  const onPressLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Home</Text>
      <Button title="log out" onPress={onPressLogOut} />
    </SafeAreaView>
  );
};

export default HomeScreen;

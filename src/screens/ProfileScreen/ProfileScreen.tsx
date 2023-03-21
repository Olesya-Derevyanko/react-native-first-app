import React from 'react';
import { SafeAreaView } from 'react-native';
import createStyles from './ProfileScreen.style';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { useCurrentTheme } from '../../utils/useCurrentTheme';

const ProfileScreen = () => {
  const { changeTheme } = useCurrentTheme();
  const styles = useThemeAwareObject(createStyles);

  const onPressChangeTheme = async () => {
    changeTheme();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Profile</Text>
      <Button title="Change theme" onPress={onPressChangeTheme} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

import React from 'react';
import { SafeAreaView, Switch, View } from 'react-native';
import createStyles from './SettingsScreen.style';
import Text from '../../../../components/Text/Text';
import { useThemeAwareObject } from '../../../../theme/useThemeAwareObject';
import { useCurrentTheme } from '../../../../hooks/useCurrentTheme';
import Button from '../../../../components/Button/Button';
import { useCurrentUser } from '../../../../hooks/useCurrentUser';

const SettingsScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { changeTheme, currentTheme } = useCurrentTheme();
  const { logout } = useCurrentUser();
  const isDarkTheme = (currentTheme || '').includes('dark');

  const onPressToggle = () => {
    changeTheme();
  };

  const onPressLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text>Dark theme</Text>
        <Switch
          trackColor={{
            false: styles.trackColorFalse.color,
            true: styles.trackColorTrue.color,
          }}
          thumbColor={
            isDarkTheme
              ? styles.thumbColorTrue.color
              : styles.thumbColorFalse.color
          }
          ios_backgroundColor={styles.iosBackgroundColor.color}
          onValueChange={onPressToggle}
          value={isDarkTheme}
        />
      </View>
      <View>
        <Button title="log out" onPress={onPressLogOut} />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

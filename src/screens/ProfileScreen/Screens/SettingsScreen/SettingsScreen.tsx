import React from 'react';
import { SafeAreaView, Switch, View } from 'react-native';
import createStyles from './SettingsScreen.style';
import Text from '../../../../components/Text/Text';
import { useThemeAwareObject } from '../../../../theme/useThemeAwareObject';
import { useCurrentTheme } from '../../../../hooks/useCurrentTheme';

const SettingsScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { changeTheme, currentTheme } = useCurrentTheme();
  const isDarkTheme = (currentTheme || '').includes('dark');

  const onPressToggle = () => {
    changeTheme();
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
    </SafeAreaView>
  );
};

export default SettingsScreen;

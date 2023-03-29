import React, { useState } from 'react';
import { SafeAreaView, Switch, View } from 'react-native';
import createStyles from './SettingsTab.style';
import Text from '../../../../../components/Text/Text';
import { useThemeAwareObject } from '../../../../../theme/useThemeAwareObject';
import { useCurrentTheme } from '../../../../../hooks/useCurrentTheme';
import Button from '../../../../../components/Button/Button';
import { useCurrentUser } from '../../../../../hooks/useCurrentUser';
import setNotifier from '../../../../../utils/notifierHelper';
import ResetPasswordModal from '../../../../../components/ResetPasswordModal/ResetPasswordModal';
import ChangeInfoModal from '../../../../../components/ChangeInfoModal/ChangeInfoModal';

const SettingsTab = () => {
  const styles = useThemeAwareObject(createStyles);
  const { changeTheme, currentTheme } = useCurrentTheme();
  const { logout, deleteUser } = useCurrentUser();
  const isDarkTheme = (currentTheme || '').includes('dark');
  const [visibleResetModal, setVisibleResetModal] = useState(false);
  const [visibleChangeModal, setVisibleChangeModal] = useState(false);

  const onPressToggle = () => {
    changeTheme();
  };

  const onPressLogOut = async () => {
    try {
      await logout();
      setNotifier({
        title: 'The user logged out',
        description: '',
        alertType: 'success',
      });
    } catch (error) {
      if (error instanceof Error) {
        setNotifier({
          title: error.message,
          description: '',
          alertType: 'error',
        });
      }
    }
  };

  const onPressDelete = async () => {
    try {
      await deleteUser();
      setNotifier({
        title: 'The user has been deleted',
        description: '',
        alertType: 'success',
      });
    } catch (error) {
      if (error instanceof Error) {
        setNotifier({
          title: error.message,
          description: '',
          alertType: 'error',
        });
      }
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
      <View style={styles.centerSection}>
        <Button
          title="change Information"
          onPress={() => setVisibleChangeModal(true)}
        />
      </View>
      <View style={styles.centerSection}>
        <Button
          title="reset password"
          onPress={() => setVisibleResetModal(true)}
        />
      </View>
      <View style={styles.centerSection}>
        <Button title="log out" onPress={onPressLogOut} />
      </View>
      <View style={styles.centerSection}>
        <Button title="delete user" onPress={onPressDelete} />
      </View>
      <ResetPasswordModal
        isVisible={visibleResetModal}
        onClose={() => setVisibleResetModal(false)}
      />
      <ChangeInfoModal
        isVisible={visibleChangeModal}
        onClose={() => setVisibleChangeModal(false)}
      />
    </SafeAreaView>
  );
};

export default SettingsTab;

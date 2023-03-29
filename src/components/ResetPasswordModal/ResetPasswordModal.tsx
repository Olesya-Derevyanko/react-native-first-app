import { FC, useEffect } from 'react';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import Button from '../Button/Button';

import createStyles from './ResetPasswordModal.style';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import setNotifier from '../../utils/notifierHelper';
import Input from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { FormResetPassType } from '../../types/userTypes';
import { resetPassSchema } from '../../validation/validationSchemes';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

const ResetPasswordModal: FC<IProps> = ({ isVisible, onClose }) => {
  const styles = useThemeAwareObject(createStyles);
  const { resetPassword } = useCurrentUser();
  const {
    control,
    handleSubmit,
    reset,
    formState: { defaultValues },
  } = useForm<FormResetPassType>({
    mode: 'all',
    resolver: yupResolver(resetPassSchema),
    defaultValues: {
      oldPassword: '',
      password: '',
      repeatPassword: '',
    },
  });

  useEffect(() => {
    return () => {
      reset(defaultValues);
    };
  }, [defaultValues, reset, isVisible]);

  const onPressSavePass = async (data: FormResetPassType) => {
    try {
      await resetPassword(data);
      onClose();
      setNotifier({
        title: 'The password has been updated',
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
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.container}>
      <SafeAreaView style={styles.contentArea}>
        <View style={[styles.inputSection, styles.firstSection]}>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                textValue={value}
                onChangeText={onChange}
                label="Old password"
                error={error?.message}
                onBlur={onBlur}
                isPassword
              />
            )}
            name="oldPassword"
          />
        </View>
        <View style={styles.inputSection}>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                textValue={value}
                onChangeText={onChange}
                label="Password"
                error={error?.message}
                onBlur={onBlur}
                isPassword
              />
            )}
            name="password"
          />
        </View>
        <View style={styles.inputSection}>
          <Controller
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <Input
                textValue={value}
                onChangeText={onChange}
                label="Repeat password"
                error={error?.message}
                onBlur={onBlur}
                isPassword
              />
            )}
            name="repeatPassword"
          />
        </View>
        <View style={styles.modalSection}>
          <Button
            title="Save new password"
            onPress={handleSubmit(onPressSavePass)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ResetPasswordModal;

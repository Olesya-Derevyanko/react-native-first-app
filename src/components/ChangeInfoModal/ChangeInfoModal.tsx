import { FC } from 'react';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import Button from '../Button/Button';

import createStyles from './ChangeInfoModal.style';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import setNotifier from '../Notifier/Notifier';
import Input from '../Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { FormUserType } from '../../types/userTypes';
import { userSchema } from '../../validation/validationSchemes';
import DatePicker from 'react-native-date-picker';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

const ChangeInfoModal: FC<IProps> = ({ isVisible, onClose }) => {
  const styles = useThemeAwareObject(createStyles);
  const { changeInfo, currentUser } = useCurrentUser();
  const { currentTheme } = useCurrentTheme();
  const { control, handleSubmit } = useForm<FormUserType>({
    mode: 'all',
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
      dob: new Date(currentUser.dob || 0),
    },
  });

  const onPressSaveChanges = async (data: FormUserType) => {
    try {
      console.log(currentUser.dob);
      await changeInfo(data);
      onClose();
      setNotifier({
        title: 'The information has been updated',
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
                placeHolder="Name"
                error={error?.message}
                onBlur={onBlur}
              />
            )}
            name="name"
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
                placeHolder="Email"
                error={error?.message}
                onBlur={onBlur}
              />
            )}
            name="email"
          />
        </View>
        <View style={styles.inputSection}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                maximumDate={new Date()}
                date={value}
                onDateChange={onChange}
                mode="date"
                title="Date of birth"
                theme={currentTheme as 'light' | 'dark'}
                androidVariant="iosClone"
                locale="en"
              />
            )}
            name="dob"
          />
        </View>
        <View style={styles.modalSection}>
          <Button
            title="Save new information"
            onPress={handleSubmit(onPressSaveChanges)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ChangeInfoModal;

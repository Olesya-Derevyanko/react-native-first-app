import React from 'react';
import { SafeAreaView, View } from 'react-native';
import createStyles from './SignInScreen.style';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import { FormSignInType } from '../../types/userTypes';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/validationSchemes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import setNotifier from '../../components/Notifier/Notifier';

const SignInScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { signIn } = useCurrentUser();
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();
  const { control, handleSubmit } = useForm<FormSignInType>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onPressSignIn = async (data: FormSignInType) => {
    try {
      await signIn(data);
    } catch (error) {
      if (error instanceof Error) {
        setNotifier({
          title: error.message,
          description: '',
          alertType: 'error',
        });
        // if (checkIsLoginErrorMessage(error.message)) {
        //   setError('login', { message: error.message });
        // }
        // if (checkIsPasswordErrorMessage(error.message)) {
        //   setError('password', { message: error.message });
        // }
      }
    }
  };

  const onPressToSignUp = () => {
    navigate.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Log In</Text>
      <View style={styles.section}>
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              textValue={value}
              onChangeText={onChange}
              placeHolder="Login"
              error={error?.message}
              onBlur={onBlur}
            />
          )}
          name="login"
        />
      </View>
      <View style={styles.section}>
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              textValue={value}
              onChangeText={onChange}
              placeHolder="Password"
              error={error?.message}
              onBlur={onBlur}
              isPassword
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.section}>
        <Button onPress={handleSubmit(onPressSignIn)} title="Log In" />
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <Text>If you don't have an account</Text>
        <Text style={styles.link} onPress={onPressToSignUp}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

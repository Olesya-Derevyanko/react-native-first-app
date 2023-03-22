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
import {
  checkIsLoginErrorMessage,
  checkIsPasswordErrorMessage,
} from '../../utils/errorCheckHelper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/hooks';
import userThunk from '../../store/user/userThunk';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';

const SignInScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const dispatch = useAppDispatch();
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormSignInType>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onPressSignIn = async (data: FormSignInType) => {
    try {
      await dispatch(userThunk.loginByLoginPass(data)).unwrap();
    } catch (error) {
      if (error) {
        if (checkIsLoginErrorMessage(error.message as string)) {
          setError('login', { message: error.message as string });
        }
        if (checkIsPasswordErrorMessage(error.message as string)) {
          setError('password', { message: error.message as string });
        }
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
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              textValue={value}
              onChangeText={onChange}
              placeHolder="Login"
              error={errors.login?.message}
              onBlur={onBlur}
            />
          )}
          name="login"
        />
      </View>
      <View style={styles.section}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              textValue={value}
              onChangeText={onChange}
              placeHolder="Password"
              error={errors.password?.message}
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

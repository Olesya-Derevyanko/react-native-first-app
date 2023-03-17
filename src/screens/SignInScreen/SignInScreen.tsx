import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SignInScreenStyle } from './SignInScreen.style';
import StyledButton from '../../components/StyledButton/StyledButton';
import StyledTitle from '../../components/StyledTitle/StyledTitle';
import StyledInput from '../../components/StyledInput/StyledInput';
import { FormSignInType } from '../../types/userTypes';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../types/validationSchemes';
import { signInToAsyncStorage } from '../../utils/signHelper';
import {
  checkIsLoginErrorMessage,
  checkIsPasswordErrorMessage,
} from '../../utils/errorCheckHelper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, touchedFields },
  } = useForm<FormSignInType>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onClickSignIn = async (data: FormSignInType) => {
    const response = await signInToAsyncStorage(data.login, data.password);
    if (response.type === 'error') {
      if (checkIsLoginErrorMessage(response.message)) {
        setError('login', { message: response.message });
      }
      if (checkIsPasswordErrorMessage(response.message)) {
        setError('password', { message: response.message });
      }
    }
  };

  const onClickToSignUp = () => {
    navigate.navigate('SignUp');
  };

  return (
    <SafeAreaView style={SignInScreenStyle.container}>
      <StyledTitle>Log In</StyledTitle>
      <View style={SignInScreenStyle.section}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              textValue={value}
              onChange={onChange}
              placeHolder="Login"
              error={errors.login?.message}
              onBlur={onBlur}
              isTouched={touchedFields.login}
            />
          )}
          name="login"
        />
      </View>
      <View style={SignInScreenStyle.section}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              textValue={value}
              onChange={onChange}
              placeHolder="Password"
              error={errors.password?.message}
              onBlur={onBlur}
              isTouched={touchedFields.password}
              isPassword
            />
          )}
          name="password"
        />
      </View>
      <View style={SignInScreenStyle.section}>
        <StyledButton
          textValue={'Log In'}
          onPress={handleSubmit(onClickSignIn)}
        />
      </View>

      <View style={[SignInScreenStyle.section, SignInScreenStyle.lastSection]}>
        <Text>If you don't have an account</Text>
        <Text style={SignInScreenStyle.link} onPress={onClickToSignUp}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

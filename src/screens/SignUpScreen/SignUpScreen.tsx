import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SignUpScreenStyle } from './SignUpScreen.style';
import StyledButton from '../../components/StyledButton/StyledButton';
import StyledTitle from '../../components/StyledTitle/StyledTitle';
import StyledInput from '../../components/StyledInput/StyledInput';
import { signUpToAsyncStorage } from '../../utils/signHelper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../types/validationSchemes';
import { FormSignUpType } from '../../types/userTypes';
import { checkIsLoginErrorMessage } from '../../utils/errorCheckHelper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';

const SignUpScreen = () => {
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignUp'>
    >();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, touchedFields },
  } = useForm<FormSignUpType>({
    mode: 'all',
    resolver: yupResolver(signupSchema),
    defaultValues: {
      login: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onClickSignUp = async (data: FormSignUpType) => {
    const response = await signUpToAsyncStorage(data.login, data.password);
    if (response.type === 'error') {
      if (checkIsLoginErrorMessage(response.message)) {
        setError('login', { message: response.message });
      }
    }
  };

  const onClickToSignIn = () => {
    navigate.navigate('SignIn');
  };

  return (
    <SafeAreaView style={SignUpScreenStyle.container}>
      <StyledTitle>Sign Up</StyledTitle>
      <View style={SignUpScreenStyle.section}>
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
      <View style={SignUpScreenStyle.section}>
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
            />
          )}
          name="password"
        />
      </View>
      <View style={SignUpScreenStyle.section}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              textValue={value}
              onChange={onChange}
              placeHolder="Repeat password"
              error={errors.repeatPassword?.message}
              onBlur={onBlur}
              isTouched={touchedFields.repeatPassword}
            />
          )}
          name="repeatPassword"
        />
      </View>
      <View style={SignUpScreenStyle.section}>
        <StyledButton
          textValue={'Sign Up'}
          onPress={handleSubmit(onClickSignUp)}
        />
      </View>

      <View style={[SignUpScreenStyle.section, SignUpScreenStyle.lastSection]}>
        <Text>If you already have an account</Text>
        <Text style={SignUpScreenStyle.link} onPress={onClickToSignIn}>
          Log In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

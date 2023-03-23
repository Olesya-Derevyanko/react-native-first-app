import React from 'react';
import { SafeAreaView, View } from 'react-native';
import createStyles from './SignUpScreen.style';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../validation/validationSchemes';
import { FormSignUpType } from '../../types/userTypes';
import { checkIsLoginErrorMessage } from '../../utils/errorCheckHelper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const SignUpScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { signUp } = useCurrentUser();
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignUp'>
    >();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormSignUpType>({
    mode: 'all',
    resolver: yupResolver(signupSchema),
    defaultValues: {
      login: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onPressSignUp = async (data: FormSignUpType) => {
    try {
      await signUp(data);
    } catch (error) {
      if (error) {
        if (checkIsLoginErrorMessage(error.message as string)) {
          setError('login', { message: error.message as string });
        }
      }
    }
  };

  const onPressToSignIn = () => {
    navigate.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Sign Up</Text>
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
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              textValue={value}
              onChangeText={onChange}
              placeHolder="Repeat password"
              error={errors.repeatPassword?.message}
              onBlur={onBlur}
              isPassword
            />
          )}
          name="repeatPassword"
        />
      </View>
      <View style={styles.section}>
        <Button title="Sign Up" onPress={handleSubmit(onPressSignUp)} />
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <Text>If you already have an account</Text>
        <Text style={styles.link} onPress={onPressToSignIn}>
          Log In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

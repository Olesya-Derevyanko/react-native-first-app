import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SignUpScreenStyle } from './SignUpScreen.style';
import StyledButton from '../../components/StyledButton/StyledButton';
import StyledTitle from '../../components/StyledTitle/StyledTitle';
import StyledInput from '../../components/StyledInput/StyledInput';
import { signUpToAsyncStorage } from '../../utils/signHelper';

const SignUpScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onClickSignUp = async () => {
    const response = await signUpToAsyncStorage(login, password);
    if (response.type === 'error') {
      console.log(response.message);
    }
  };

  return (
    <SafeAreaView style={SignUpScreenStyle.container}>
      <StyledTitle>Sign Up</StyledTitle>
      <View style={SignUpScreenStyle.section}>
        <StyledInput
          textValue={login}
          onChange={newText => setLogin(newText)}
          placeHolder="Login"
        />
      </View>
      <View style={SignUpScreenStyle.section}>
        <StyledInput
          textValue={password}
          onChange={newText => setPassword(newText)}
          placeHolder="Password"
        />
      </View>
      <View style={SignUpScreenStyle.section}>
        <StyledInput
          textValue={password}
          onChange={newText => setPassword(newText)}
          placeHolder="Repeat password"
        />
      </View>
      <View style={SignUpScreenStyle.section}>
        <StyledButton textValue={'Sign Up'} onPress={onClickSignUp} />
      </View>

      <View style={[SignUpScreenStyle.section, SignUpScreenStyle.lastSection]}>
        <Text>if you already have an account</Text>
        <Text style={SignUpScreenStyle.link}>Log In</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

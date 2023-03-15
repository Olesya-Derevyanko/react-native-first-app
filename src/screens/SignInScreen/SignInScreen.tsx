import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SignInScreenStyle } from './SignInScreen.style';
import StyledButton from '../../components/StyledButton/StyledButton';
import StyledTitle from '../../components/StyledTitle/StyledTitle';
import StyledInput from '../../components/StyledInput/StyledInput';

const SignInScreen = () => {
  const [text, setText] = useState('');

  const onClickLogIn = () => {
    console.log('log in');
  };

  return (
    <SafeAreaView style={SignInScreenStyle.container}>
      <StyledTitle>Log In</StyledTitle>
      <View style={SignInScreenStyle.section}>
        <StyledInput
          textValue={text}
          onChange={newText => setText(newText)}
          placeHolder="Login"
        />
      </View>
      <View style={SignInScreenStyle.section}>
        <StyledInput
          textValue={text}
          onChange={newText => setText(newText)}
          placeHolder="Password"
        />
      </View>
      <View style={SignInScreenStyle.section}>
        <StyledButton textValue={'Log In'} onPress={onClickLogIn} />
      </View>

      <View style={[SignInScreenStyle.section, SignInScreenStyle.lastSection]}>
        <Text>if you don't have an account</Text>
        <Text style={SignInScreenStyle.link}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

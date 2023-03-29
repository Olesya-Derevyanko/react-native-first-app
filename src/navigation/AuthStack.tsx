import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import SignInScreen from '../screens/auth/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'SignIn',
    component: SignInScreen,
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map(routeConfig => (
        <Stack.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;

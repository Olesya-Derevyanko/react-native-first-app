import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import AuthStack from './AuthStack';
import { checkAuthUser } from '../utils/signHelper';
import RootStack from './RootStack';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import userThunk from '../store/user/userThunk';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const Navigation = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userSlice.user);

  useEffect(() => {
    (async () => {
      const login = await checkAuthUser();
      if (login) {
        await dispatch(userThunk.loginByLogin()).unwrap();
        return;
      }
    })();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user.login ? (
          <Stack.Screen name="Root" component={RootStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

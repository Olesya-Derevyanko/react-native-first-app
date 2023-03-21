import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import AuthStack from './AuthStack';
import { checkAuthUser } from '../utils/signHelper';
import RootStack from './RootStack';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import userThunk from '../store/user/userThunk';
import Spinner from '../components/Spinner/Spinner';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] =
    useState<keyof NavigatorRootStackParamListType>('All');
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userSlice.user);

  useEffect(() => {
    (async () => {
      const login = await checkAuthUser();
      if (login) {
        await dispatch(userThunk.loginByLogin()).unwrap();
      }
      if (isLoading) {
        setIsLoading(false);
      }
    })();
  }, [dispatch, isLoading]);

  const Root = () => {
    return (
      <RootStack
        initialRoute={initialRoute}
        setInitialRoute={setInitialRoute}
      />
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {user.login ? (
          <Stack.Screen name="Root" component={Root} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

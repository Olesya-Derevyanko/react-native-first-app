import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import Spinner from '../components/Spinner/Spinner';
import { useCurrentUser } from '../hooks/useCurrentUser';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { checkAuthorized, currentUser } = useCurrentUser();

  useEffect(() => {
    (async () => {
      await checkAuthorized();
      if (isLoading) {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {currentUser.login ? (
          <Stack.Screen name="Root" component={RootStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

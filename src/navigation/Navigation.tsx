import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import { useCurrentUser } from '../hooks/useCurrentUser';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { checkAuthorized, currentUser } = useCurrentUser();

  useEffect(() => {
    const init = async () => {
      await checkAuthorized();
      if (isLoading) {
        setIsLoading(false);
      }
    };
    init().finally(() => {
      RNBootSplash.hide({ fade: true });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser.login ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Root"
            component={RootStack}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="AuthStack"
            component={AuthStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

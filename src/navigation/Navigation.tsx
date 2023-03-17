import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import AuthStack from './AuthStack';
import { checkAuthUser } from '../utils/signHelper';
import RootStack from './RootStack';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    (async () => {
      const login = await checkAuthUser();
      if (login) {
        setIsAuth(true);
        return;
      }
      setIsAuth(false);
    })();
  }, []);

  // if (!isAuth) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen name="Root" component={RootStack} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuth ? (
          <Stack.Screen name="Root" component={RootStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

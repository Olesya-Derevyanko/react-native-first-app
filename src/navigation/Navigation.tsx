import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import AuthStack from './AuthStack';
import RootStack from './RootStack';
import Spinner from '../components/Spinner/Spinner';
import { useCurrentUser } from '../hooks/useCurrentUser';
import SingleScreen from '../screens/SingleScreen/SingleScreen';
import Header from './Header/Header';

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
    // init().finally(() => {
    //   RNBootSplash.hide({ fade: true });
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser.login ? (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Root"
              component={RootStack}
            />
            <Stack.Screen
              name="SingleCharacter"
              component={SingleScreen}
              options={{
                title: 'Detailed information',
                header: props => (
                  <Header
                    back={props.back}
                    navigation={props.navigation}
                    options={props.options}
                    route={props.route}
                  />
                ),
              }}
            />
          </>
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

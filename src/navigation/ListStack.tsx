import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import ListScreen from '../screens/ListScreen/ListScreen';
import SingleScreen from '../screens/SingleScreen/SingleScreen';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Header from './Header/Header';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const ListStack = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'SingleCharacter') {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="ArrayCharacter"
          component={ListScreen}
          options={{ headerShown: false }}
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ListStack;

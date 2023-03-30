import React from 'react';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import SingleScreen from '../screens/root/SingleScreen/SingleScreen';
import Header from './Header/Header';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TabNavigation"
        component={TabNavigation}
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
    </Stack.Navigator>
  );
};

export default RootStack;

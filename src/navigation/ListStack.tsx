import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import ListScreen from '../screens/ListScreen/ListScreen';
import SingleScreen from '../screens/SingleScreen/SingleScreen';

const Stack = createNativeStackNavigator<NavigatorRootStackParamListType>();

const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingleCharacter"
          component={SingleScreen}
          options={{ title: 'Detailed information' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ListStack;

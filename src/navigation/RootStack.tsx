import React from 'react';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

// type PropType = {
//   initialRoute: keyof NavigatorRootStackParamListType;
//   setInitialRoute: React.Dispatch<React.SetStateAction<keyof NavigatorRootStackParamListType>>;
// };

const TabStack = createBottomTabNavigator<NavigatorRootStackParamListType>();

const routes: Array<React.ComponentProps<typeof TabStack.Screen>> = [
  {
    name: 'Home',
    component: HomeScreen,
  },
];

const RootStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map(routeConfig => (
        <TabStack.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </TabStack.Navigator>
  );
};

export default RootStack;

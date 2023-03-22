import React from 'react';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import TabBar from './TabBar/TabBar';

const TabStack = createBottomTabNavigator<NavigatorRootStackParamListType>();

const RootStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => (
        <TabBar
          navigation={props.navigation}
          state={props.state}
          descriptors={props.descriptors}
        />
      )}>
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Profile" component={ProfileScreen} />
    </TabStack.Navigator>
  );
};

export default RootStack;

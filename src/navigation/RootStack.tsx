import React from 'react';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeIcon from '../assets/icons/home.svg';
import ProfileIcon from '../assets/icons/user.svg';
import TabBar from './TabBar/TabBar';

const TabStack = createBottomTabNavigator<NavigatorRootStackParamListType>();

const routes: Array<React.ComponentProps<typeof TabStack.Screen>> = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <HomeIcon color={color} width={23} height={23} />
      ),
    },
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
        <ProfileIcon color={color} width={23} height={23} />
      ),
    },
  },
];

type PropType = {
  initialRoute: keyof NavigatorRootStackParamListType;
  setInitialRoute: React.Dispatch<
    React.SetStateAction<keyof NavigatorRootStackParamListType>
  >;
};

const RootStack: React.FC<PropType> = () => {
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
      {routes.map(routeConfig => (
        <TabStack.Screen key={routeConfig.name} {...routeConfig} />
      ))}
    </TabStack.Navigator>
  );
};

export default RootStack;

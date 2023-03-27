import React, { useEffect, useState } from 'react';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import TabBar from './TabBar/TabBar';
import { useCurrentApi } from '../hooks/useCurrentApi';
import Spinner from '../components/Spinner/Spinner';
import ListScreen from '../screens/ListScreen/ListScreen';

const TabStack = createBottomTabNavigator<NavigatorRootStackParamListType>();

const RootStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getCharacters, getEpisodes, getLocations } = useCurrentApi();

  useEffect(() => {
    (async () => {
      await getCharacters();
      await getEpisodes();
      await getLocations();
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
      <TabStack.Screen name="List" component={ListScreen} />
      <TabStack.Screen name="Home" component={HomeScreen} />
      <TabStack.Screen name="Profile" component={ProfileScreen} />
    </TabStack.Navigator>
  );
};

export default RootStack;

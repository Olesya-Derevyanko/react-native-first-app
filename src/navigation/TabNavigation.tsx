import React, { useEffect, useState } from 'react';
import { NavigatorRootStackParamListType } from '../types/navigationTypes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/root/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/root/ProfileScreen/ProfileScreen';
import TabBar from './TabBar/TabBar';
import { useCharacters } from '../hooks/useCharacters';
import Spinner from '../components/Spinner/Spinner';
import ListScreen from '../screens/root/ListScreen/ListScreen';

const TabStack = createBottomTabNavigator<NavigatorRootStackParamListType>();

const TabNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getCharacters, getEpisodes, getLocations } = useCharacters();

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

export default TabNavigation;

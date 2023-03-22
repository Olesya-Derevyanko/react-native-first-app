import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  TabNavigationState,
  ParamListBase,
  NavigationHelpers,
} from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../../components/Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import createStyles from './TabBar.style';
import HomeIcon from '../../assets/icons/home.svg';
import ProfileIcon from '../../assets/icons/user.svg';

type PropsType = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const TabBar: React.FC<PropsType> = ({ state, descriptors, navigation }) => {
  const styles = useThemeAwareObject(createStyles);

  const currentIcon = (option: {
    name: string;
    color: string;
    focused: boolean;
    width: number;
    height: number;
  }) => {
    switch (option.name) {
      case 'Home':
        return <HomeIcon {...option} />;
      case 'Profile':
        return <ProfileIcon {...option} />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(`${route.name}`, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              isFocused ? styles.tabSectionActive : styles.tabSectionInactive
            }>
            {currentIcon({
              color: isFocused
                ? styles.activeIcon.color
                : styles.inactiveIcon.color,
              focused: isFocused,
              width: 23,
              height: 23,
              name: route.name,
            })}
            <Text
              style={
                isFocused ? styles.activeIcon : styles.inactiveIcon
              }>{`${label}`}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

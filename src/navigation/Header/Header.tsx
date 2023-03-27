import { ParamListBase, Route } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../../components/Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { SingleCharacterType } from '../../types/navigationTypes';
import createStyles from './Header.style';
import ArrowLeftIcon from '../../assets/icons/arrow-small-left.svg';

type PropsType = {
  back?: {
    title: string;
  };
  options: NativeStackNavigationOptions;
  route: Route<string>;
  navigation: NativeStackNavigationProp<ParamListBase>;
};

const Header: React.FC<PropsType> = ({ options, route, navigation }) => {
  const styles = useThemeAwareObject(createStyles);
  const params = route.params as SingleCharacterType;
  const title = params.name;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowLeftIcon
            width={35}
            height={35}
            color={styles.activeIcon.color}
          />
        </TouchableOpacity>
        {title ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <Text style={styles.title}>{options.title}</Text>
        )}
        <View style={styles.plug} />
      </View>
    </View>
  );
};

export default Header;

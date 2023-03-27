import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { FC } from 'react';
import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { CharacterType } from '../../types/ApiTypes';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';
import Text from '../Text/Text';
import createStyles from './ListItem.style';

interface IProps extends TouchableOpacityProps {
  person: CharacterType;
}

const ListItem: FC<IProps> = ({ person, ...touchableProps }) => {
  const navigation =
    useNavigation<NavigationProp<NavigatorRootStackParamListType>>();

  const onPressItem = () => {
    navigation.navigate('SingleCharacter', {
      id: person.id,
      name: person.name,
    });
  };
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity
      style={[styles.container, styles.marginContent]}
      {...touchableProps}
      onPress={onPressItem}>
      <View style={styles.container}>
        <Image style={styles.imageSection} source={{ uri: person.image }} />
        <View style={[styles.infoSection, styles.marginContent]}>
          <Text isHeader style={styles.title}>
            {person.name}
          </Text>
          <View style={styles.marginSection}>
            <Text>
              {person.status} - {person.species}
            </Text>
            <View style={styles.marginSection}>
              <Text style={styles.subTitle}>Last known location:</Text>
              <Text>{person.location.name}</Text>
            </View>
            <View style={styles.marginSection}>
              <Text style={styles.subTitle}>First seen in:</Text>
              <Text>{person.firstEpisode}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

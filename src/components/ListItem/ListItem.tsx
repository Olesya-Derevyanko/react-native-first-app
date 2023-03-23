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
import Text from '../Text/Text';
import createStyles from './ListItem.style';
import image from '../../assets/young-delivery-woman.jpg';

interface IProps extends TouchableOpacityProps {
  person: CharacterType;
}

const ListItem: FC<IProps> = ({ person, ...touchableProps }) => {
  const styles = useThemeAwareObject(createStyles);
  return (
    <TouchableOpacity
      style={[styles.container, styles.marginContent]}
      {...touchableProps}>
      <View style={styles.container}>
        <Image style={styles.imageSection} source={image} />
        <View style={[styles.infoSection, styles.marginContent]}>
          <Text isHeader style={styles.title}>
            {person.name}
          </Text>
          <Text>
            {person.status} - {person.species}
          </Text>
          <Text style={styles.subTitle}>Last known location:</Text>
          <Text>{person.location.name}</Text>
          <Text style={styles.subTitle}>First seen in:</Text>
          <Text>{person.firstEpisode}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import createStyles from './ListScreen.style';
import Text from '../../components/Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { CharacterType } from '../../types/ApiTypes';
import ListItem from '../../components/ListItem/ListItem';

const arrItems: Array<CharacterType> = [
  {
    id: 1,
    name: 'Rick',
    status: 'Alive',
    species: 'some',
    type: 'human',
    gender: 'male',
    origin: {
      name: 'earth',
      url: '',
    },
    location: {
      name: 'earth',
      url: '',
    },
    image: '',
    episode: ['qwe', 'qwe2'],
    url: '',
    created: '',
    firstEpisode: 'qwe',
  },
  {
    id: 2,
    name: 'Morty',
    status: 'Alive',
    species: 'some',
    type: 'human',
    gender: 'male',
    origin: {
      name: 'earth',
      url: '',
    },
    location: {
      name: 'earth',
      url: '',
    },
    image: '',
    episode: ['qwe', 'qwe2'],
    url: '',
    created: '',
    firstEpisode: 'qwe',
  },
  {
    id: 3,
    name: 'Alex',
    status: 'Alive',
    species: 'some',
    type: 'human',
    gender: 'male',
    origin: {
      name: 'earth',
      url: '',
    },
    location: {
      name: 'earth',
      url: '',
    },
    image: '',
    episode: ['qwe', 'qwe2'],
    url: '',
    created: '',
    firstEpisode: 'qwe',
  },
];

const ListScreen = () => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>List</Text>
      <FlatList
        data={arrItems}
        renderItem={item => <ListItem person={item.item} />}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

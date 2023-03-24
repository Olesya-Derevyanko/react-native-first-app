import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import createStyles from './ListScreen.style';
import Text from '../../components/Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import ListItem from '../../components/ListItem/ListItem';
import Spinner from '../../components/Spinner/Spinner';
import { useCurrentApi } from '../../hooks/useCurrentApi';

const ListScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { currentCharacters, getCharacters } = useCurrentApi();

  const downloadCurrentItems = async () => {
    await getCharacters();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Rick and Morty</Text>
      <FlatList
        data={currentCharacters}
        renderItem={item => <ListItem person={item.item} />}
        ListFooterComponent={<Spinner />}
        onEndReached={downloadCurrentItems}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

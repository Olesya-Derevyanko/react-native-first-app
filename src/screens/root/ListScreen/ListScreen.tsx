import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import createStyles from './ListScreen.style';
import Text from '../../../components/Text/Text';
import { useThemeAwareObject } from '../../../theme/useThemeAwareObject';
import ListItem from './components/ListItem/ListItem';
import Spinner from '../../../components/Spinner/Spinner';
import { useCharacters } from '../../../hooks/useCharacters';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigatorRootStackParamListType } from '../../../types/navigationTypes';
import { CharacterType } from '../../../types/ApiTypes';

const ListScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const navigation =
    useNavigation<NavigationProp<NavigatorRootStackParamListType>>();

  const onPressItem = (person: CharacterType) => {
    navigation.navigate('SingleCharacter', {
      id: person.id,
      name: person.name,
    });
  };
  const { currentCharacters, getCharacters } = useCharacters();

  const downloadCurrentItems = async () => {
    await getCharacters();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Rick and Morty</Text>
      <FlatList
        data={currentCharacters}
        renderItem={item => (
          <ListItem
            onPress={() => onPressItem(item.item)}
            key={item.index}
            person={item.item}
          />
        )}
        ListFooterComponent={<Spinner />}
        onEndReached={downloadCurrentItems}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

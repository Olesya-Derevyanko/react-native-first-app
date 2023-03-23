import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import createStyles from './ListScreen.style';
import Text from '../../components/Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';

const ListScreen = () => {
  const styles = useThemeAwareObject(createStyles);

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>List</Text>
      <FlatList data={[]} renderItem={() => <View />} />
    </SafeAreaView>
  );
};

export default ListScreen;

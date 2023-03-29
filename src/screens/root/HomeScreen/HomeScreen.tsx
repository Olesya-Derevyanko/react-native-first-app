import React from 'react';
import { SafeAreaView, View } from 'react-native';
import createStyles from './HomeScreen.style';
import Text from '../../../components/Text/Text';
import { useThemeAwareObject } from '../../../theme/useThemeAwareObject';
import { useCharacters } from '../../../hooks/useCharacters';

const HomeScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { currentInfoCharacter, currentInfoEpisode, currentInfoLocation } =
    useCharacters();

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Home</Text>
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.subTitle}>Characters: </Text>
          <Text style={styles.subTitle}>{currentInfoCharacter.count}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.subTitle}>Locations: </Text>
          <Text style={styles.subTitle}>{currentInfoLocation.count}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.subTitle}>Episodes: </Text>
          <Text style={styles.subTitle}>{currentInfoEpisode.count}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React, { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import createStyles from './SingleScreen.style';
import Text from '../../components/Text/Text';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useCurrentApi } from '../../hooks/useCurrentApi';
import Spinner from '../../components/Spinner/Spinner';

type PropsType = {
  SingleCharacter: {
    id: string;
  };
};

const SingleScreen = () => {
  const styles = useThemeAwareObject(createStyles);
  const { currentCharacter, currentEpisodes, getCurrentCharacter } =
    useCurrentApi();
  const route = useRoute<RouteProp<PropsType, 'SingleCharacter'>>();
  const { id } = route.params;

  useEffect(() => {
    (async () => {
      await getCurrentCharacter(+id);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (currentCharacter?.id !== +id) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Spinner />
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.mainContainer, styles.marginContent]}>
        <Image
          style={styles.imageSection}
          source={{ uri: currentCharacter.image }}
        />
        <View style={[styles.infoSection, styles.marginContent]}>
          <View style={styles.marginSection}>
            <Text>
              {currentCharacter.status} - {currentCharacter.species}
            </Text>
            <View style={styles.marginSection}>
              <Text style={styles.subTitle}>Last known location:</Text>
              <Text>{currentCharacter.location.name}</Text>
            </View>
          </View>
          <View style={styles.marginSection}>
            <Text style={styles.subTitle}>Episodes:</Text>
            {currentEpisodes.map(item => (
              <View key={item.id} style={styles.episodeContainer}>
                <Text>{item.episode}</Text>
                <Text> - </Text>
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleScreen;

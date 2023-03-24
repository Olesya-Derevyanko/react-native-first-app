import React, { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
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
  }, [getCurrentCharacter, id]);

  if (currentCharacter?.id !== +id) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Spinner />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader style={styles.marginContent}>
        {currentCharacter.name}
      </Text>
      <View style={styles.mainContainer}>
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
            <FlatList
              data={currentEpisodes}
              renderItem={({ item }) => <Text>{item.name}</Text>}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingleScreen;

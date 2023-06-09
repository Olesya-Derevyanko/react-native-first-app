import React from 'react';
import { SafeAreaView } from 'react-native';
import createStyles from './ProfileScreen.style';
import { useThemeAwareObject } from '../../../theme/useThemeAwareObject';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import UserTab from './components/UserTab/UserTab';
import SettingsTab from './components/SettingsTab/SettingsTab';

const renderScene = SceneMap({
  first: UserTab,
  second: SettingsTab,
});

const ProfileScreen = () => {
  const styles = useThemeAwareObject(createStyles);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'User' },
    { key: 'second', title: 'Settings' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={styles.topTabBar}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.topTabIndicator}
            style={styles.topTabBar}
            labelStyle={styles.tabText}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

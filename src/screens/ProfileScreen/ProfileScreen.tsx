import React from 'react';
import { SafeAreaView } from 'react-native';
import createStyles from './ProfileScreen.style';
// import Text from '../../components/Text/Text';
// import Button from '../../components/Button/Button';
import { useThemeAwareObject } from '../../theme/useThemeAwareObject';
// import { useCurrentTheme } from '../../utils/useCurrentTheme';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import UserScreen from './Screens/UserScreen/UserScreen';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen';

const renderScene = SceneMap({
  first: UserScreen,
  second: SettingsScreen,
});

const ProfileScreen = () => {
  // const { changeTheme } = useCurrentTheme();
  const styles = useThemeAwareObject(createStyles);

  // const onPressChangeTheme = async () => {
  //   changeTheme();
  // };

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
      {/* <Text isHeader>Profile</Text>
      <Button title="Change theme" onPress={onPressChangeTheme} /> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

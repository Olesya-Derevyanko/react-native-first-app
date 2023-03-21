import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import createStyles from './UserScreen.style';
import Text from '../../../../components/Text/Text';
import { useAppSelector } from '../../../../store/hooks';
import { useThemeAwareObject } from '../../../../theme/useThemeAwareObject';
import UserIcon from '../../../../assets/icons/user.svg';
import PlusIcon from '../../../../assets/icons/plus.svg';
import image from '../../../../assets/young-delivery-woman.jpg';

const UserScreen = () => {
  const user = useAppSelector(state => state.userSlice.user);
  const styles = useThemeAwareObject(createStyles);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.infoArea}>
        <View style={styles.avatarArea}>
          {user.avatar ? (
            <ImageBackground
              source={image}
              resizeMode="cover"
              borderRadius={25}
              style={styles.avatarArea}
            />
          ) : (
            <UserIcon width={150} height={150} style={styles.avatarPhoto} />
          )}
          <TouchableOpacity style={styles.changeAvatar}>
            <PlusIcon width={20} height={20} style={styles.changeAvatar} />
          </TouchableOpacity>
        </View>
        {user.name && (
          <View>
            <Text>Name: </Text>
            <Text>{user.name}</Text>
          </View>
        )}

        {user.email && (
          <View>
            <Text>Email: </Text>
            <Text>{user.email}</Text>
          </View>
        )}

        {user.dob && (
          <View>
            <Text>Date of birth: </Text>
            <Text>{user.dob?.toDateString()}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;

import React, { useState } from 'react';
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
import ImagePickerModal from '../../../../components/ImagePickerModal/ImagePickerModal';

const UserScreen = () => {
  const user = useAppSelector(state => state.userSlice.user);
  const styles = useThemeAwareObject(createStyles);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.infoArea}>
        <View style={styles.avatarArea}>
          {user.avatar ? (
            <ImageBackground
              source={{ uri: user.avatar }}
              resizeMode="cover"
              borderRadius={25}
              style={styles.avatarArea}
            />
          ) : (
            <UserIcon width={100} height={100} style={styles.avatarPhoto} />
          )}
          <TouchableOpacity
            style={styles.changeAvatar}
            onPress={() => setVisible(true)}>
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
      <ImagePickerModal isVisible={visible} onClose={() => setVisible(false)} />
    </SafeAreaView>
  );
};

export default UserScreen;

import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import createStyles from './UserTab.style';
import Text from '../../../../../components/Text/Text';
import { useThemeAwareObject } from '../../../../../theme/useThemeAwareObject';
import UserIcon from '../../../../../assets/icons/user.svg';
import PlusIcon from '../../../../../assets/icons/plus.svg';
import ImagePickerModal from '../../../../../components/ImagePickerModal/ImagePickerModal';
import { useCurrentUser } from '../../../../../hooks/useCurrentUser';

const UserTab = () => {
  const { currentUser } = useCurrentUser();
  const styles = useThemeAwareObject(createStyles);
  const [visible, setVisible] = useState(false);
  const currentDate = currentUser.dob
    ? new Date(currentUser.dob).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.infoArea}>
        <View style={styles.avatarArea}>
          {currentUser.avatar ? (
            <ImageBackground
              source={{ uri: currentUser.avatar }}
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
        {currentUser.name && (
          <View style={styles.infoSection}>
            <Text>Name: </Text>
            <Text>{currentUser.name}</Text>
          </View>
        )}

        {currentUser.email && (
          <View style={styles.infoSection}>
            <Text>Email: </Text>
            <Text>{currentUser.email}</Text>
          </View>
        )}

        {currentDate && (
          <View style={styles.infoSection}>
            <Text>Date of birth: </Text>
            <Text>{currentDate}</Text>
          </View>
        )}
      </ScrollView>
      <ImagePickerModal isVisible={visible} onClose={() => setVisible(false)} />
    </SafeAreaView>
  );
};

export default UserTab;

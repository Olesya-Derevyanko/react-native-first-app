import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './HomeScreen.style';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useAppDispatch } from '../../store/hooks';
import userThunk from '../../store/user/userThunk';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const onPressLogOut = async () => {
    try {
      await dispatch(userThunk.logOut()).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text isHeader>Home</Text>
      <Button title="log out" onPress={onPressLogOut} />
    </SafeAreaView>
  );
};

export default HomeScreen;

import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreenStyle } from './HomeScreen.style';
import StyledTitle from '../../components/StyledTitle/StyledTitle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorRootStackParamListType } from '../../types/navigationTypes';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigate =
    useNavigation<
      NativeStackNavigationProp<NavigatorRootStackParamListType, 'SignIn'>
    >();

  return (
    <SafeAreaView style={HomeScreenStyle.container}>
      <StyledTitle>Home</StyledTitle>
    </SafeAreaView>
  );
};

export default HomeScreen;

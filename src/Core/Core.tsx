import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { useCurrentTheme } from '../hooks/useCurrentTheme';
import { DEFAULT_DARK_THEME } from '../theme/darkTheme';
import { DEFAULT_LIGHT_THEME } from '../theme/lightTheme';
import { ThemeProvider } from '../theme/theme.context';
import Spinner from '../components/Spinner/Spinner';
import { NotifierWrapper } from 'react-native-notifier';
import { useThemeAwareObject } from '../theme/useThemeAwareObject';
import createStyles from './Core.style';

const Core = () => {
  const styles = useThemeAwareObject(createStyles);
  const [isLoading, setIsLoading] = useState(true);

  const { setCurrentTheme, currentTheme } = useCurrentTheme();

  useEffect(() => {
    (async () => {
      await setCurrentTheme();
      if (isLoading) {
        setIsLoading(false);
      }
    })();
  }, [setCurrentTheme, currentTheme, isLoading]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Spinner />
      </SafeAreaView>
    );
  }

  return (
    <ThemeProvider
      initial={
        currentTheme === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME
      }>
      <StatusBar
        translucent
        hidden={Platform.OS !== 'ios'}
        barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NotifierWrapper>
        <Navigation />
      </NotifierWrapper>
    </ThemeProvider>
  );
};

export default Core;

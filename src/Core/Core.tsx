import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import { StatusBar } from 'react-native';
import { useCurrentTheme } from '../hooks/useCurrentTheme';
import { DEFAULT_DARK_THEME } from '../theme/darkTheme';
import { DEFAULT_LIGHT_THEME } from '../theme/lightTheme';
import { ThemeProvider } from '../theme/theme.context';
import Spinner from '../components/Spinner/Spinner';
import { NotifierWrapper } from 'react-native-notifier';

const Core = () => {
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
    return <Spinner />;
  }

  return (
    <ThemeProvider
      initial={
        currentTheme === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME
      }>
      <StatusBar
        translucent
        barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NotifierWrapper>
        <Navigation />
      </NotifierWrapper>
    </ThemeProvider>
  );
};

export default Core;

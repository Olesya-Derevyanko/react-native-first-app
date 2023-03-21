import React, { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import { StatusBar } from 'react-native';
import { useAppSelector } from '../store/hooks';
import { useCurrentTheme } from '../utils/useCurrentTheme';
import { DEFAULT_DARK_THEME } from '../theme/darkTheme';
import { DEFAULT_LIGHT_THEME } from '../theme/lightTheme';
import { ThemeProvider } from '../theme/theme.context';
import Spinner from '../components/Spinner/Spinner';

const Core = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useAppSelector(state => state.userSlice.theme);
  const { setCurrentTheme } = useCurrentTheme();

  useEffect(() => {
    (async () => {
      await setCurrentTheme();
      if (isLoading) {
        setIsLoading(false);
      }
    })();
  }, [setCurrentTheme, theme, isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider
      initial={theme === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME}>
      <StatusBar
        translucent
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Navigation />
    </ThemeProvider>
  );
};

export default Core;

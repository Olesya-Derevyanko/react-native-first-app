import React from 'react';

import { DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID } from './darkTheme';
import { DEFAULT_LIGHT_THEME, DEFAULT_LIGHT_THEME_ID } from './lightTheme';
import { Theme } from './theme.interface';

interface ProvidedValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const Context = React.createContext<ProvidedValue>({
  theme: DEFAULT_LIGHT_THEME,
  setTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

export interface Props {
  initial: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  const [theme, setTheme] = React.useState<Theme>(props.initial);

  const setThemeCallback = React.useCallback((newTheme: Theme) => {
    setTheme((currentTheme: Theme) => {
      if (currentTheme.id === newTheme.id) {
        return currentTheme;
      }

      return newTheme;
    });
  }, []);

  const toggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME;
      }
      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const memoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      setTheme: setThemeCallback,
      toggleTheme: toggleThemeCallback,
    };
    return value;
  }, [theme, setThemeCallback, toggleThemeCallback]);

  return (
    <Context.Provider value={memoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => React.useContext(Context);

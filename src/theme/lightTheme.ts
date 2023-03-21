import { ColorTheme, SpacingTheme, Theme } from './theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  background: 'white',
  textColor: 'black',
  titleColor: 'black',
  error: 'red',
  active: '#666373',
  default: '#c7c7c7',
  disable: '',
  primary: '#ff9800',
  backgroundInput: '#f5f5f5',
  buttonTextColor: 'white',
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  colors: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
};

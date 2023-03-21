import { ColorTheme, SpacingTheme, Theme } from './theme.interface';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  background: '#272b33',
  textColor: 'white',
  titleColor: '#ff9800',
  error: '#ff4545',
  active: '#dbdbdb',
  default: '#666373',
  disable: '',
  primary: '#ff9800',
  backgroundInput: '#202329',
  buttonTextColor: 'white',
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  colors: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
};

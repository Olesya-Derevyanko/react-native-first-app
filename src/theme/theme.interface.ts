export interface ColorTheme {
  background: string;
  textColor: string;
  titleColor: string;
  error: string;
  active: string;
  default: string;
  disable: string;
  primary: string;
  backgroundInput: string;
  buttonTextColor: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface Theme {
  id: string;
  colors: ColorTheme;
  spacing: SpacingTheme;
}

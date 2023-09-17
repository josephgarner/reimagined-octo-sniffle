export type ThemeType = {
  color?: Colors;
  spacing?: Spacing;
  fontSize?: FontSize;
};

type Colors = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  quaternary?: string;
  black?: string;
  white?: string;
  grey?: string;
};

type Spacing = {
  xxs?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

type FontSize = {
  h0?: number;
  h1?: number;
  h2?: number;
  h3?: number;
  h4?: number;
  h5?: number;
  h6?: number;
  h7?: number;
};

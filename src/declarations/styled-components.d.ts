import type { CSSProp } from 'styled-components/native';
import Theme from '../stylesheets/theme';

type ThemeType = typeof Theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
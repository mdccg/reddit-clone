import palette from './palette';
import theme, { Theme } from './theme';

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.blackPrimary,
    mainForeground: palette.blackLight,
  },
};

export default darkTheme;
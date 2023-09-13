import palette from './palette';
import theme, { Theme } from './theme';

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.blackLight,
    mainForeground: palette.blackPrimary,
    iconPrimaryBackground: palette.whitePrimary,
  },
};

export default darkTheme;
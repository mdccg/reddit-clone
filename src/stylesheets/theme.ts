import { createTheme } from '@shopify/restyle';
import palette from './palette';

const theme = createTheme({
  colors: {
    mainBackground: palette.whitePrimary,
    mainForeground: palette.whiteLight,
    cardPrimaryBackground: palette.orangePrimary,
    buttonPrimaryBackground: palette.bluePrimary,
  },

  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },

  textVariants: {
    header: {
      fontFamily: 'Lato_700Bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;
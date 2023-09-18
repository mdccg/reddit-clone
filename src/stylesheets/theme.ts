import { createTheme } from '@shopify/restyle';
import palette from './palette';

const theme = createTheme({
  colors: {
    mainBackground: palette.whitePrimary,
    mainForeground: palette.whiteLight,
    cardPrimaryBackground: palette.orangePrimary,
    buttonPrimaryBackground: palette.bluePrimary,
    iconPrimaryBackground: palette.blackPrimary,
    onlinePrimaryBackground: palette.greenPrimary,
    grayBackground: palette.grayLight,
    transparent: 'rgba(0, 0, 0, 0)'
  },

  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },

  textVariants: {
    bold: {
      fontFamily: 'Verdana_700Bold',
    },

    header: {
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      fontFamily: 'Verdana_400Regular',
      color: 'iconPrimaryBackground',
    },
  },
});

export type Theme = typeof theme;
export default theme;
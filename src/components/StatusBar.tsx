import Constants from 'expo-constants';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { View } from 'react-native';
import { UserContext } from '../context/UserContext';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../stylesheets/theme';

const StatusBar = () => {
  const { isDarkThemeActivated } = useContext(UserContext);
  const theme = useTheme<Theme>();

  return (
    <>
      <View style={{ height: Constants.statusBarHeight, backgroundColor: theme.colors.mainForeground }} />
      <ExpoStatusBar style={isDarkThemeActivated ? 'light' : 'dark'} />
    </>
  );
}

export default StatusBar;
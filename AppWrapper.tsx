import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { useContext, useEffect, useState } from 'react';
import StatusBar from './src/components/StatusBar';
import { UserContext } from './src/context/UserContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import LoadingScreen from './src/screens/Loading';
import darkTheme from './src/stylesheets/darkTheme';
import theme from './src/stylesheets/theme';

const AppWrapper = () => {
  const [fontsLoaded] = useFonts({
    'Verdana_400Regular': require('./assets/fonts/verdana.ttf'),
    'Verdana_700Bold': require('./assets/fonts/verdana-bold.ttf'),
    'Verdana_700BoldItalic': require('./assets/fonts/verdana-bold-italic.ttf'),
  });

  const { isDarkThemeActivated } = useContext(UserContext);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const displayLoadingScreen = () => setTimeout(() => setIsReady(true), 3000);
    displayLoadingScreen();
  }, []);

  return (
    <ThemeProvider theme={isDarkThemeActivated ? darkTheme : theme}>
      <StatusBar />

      <NavigationContainer>
        {(fontsLoaded && isReady) ? <MainStackNavigator /> : <LoadingScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default AppWrapper;
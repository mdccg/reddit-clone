import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './src/context/UserContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import LoadingScreen from './src/screens/Loading';
import theme from './src/stylesheets/theme';
import darkTheme from './src/stylesheets/darkTheme';
import { useFonts } from 'expo-font';

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
      <NavigationContainer>
        {isReady ? <MainStackNavigator /> : <LoadingScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default AppWrapper;
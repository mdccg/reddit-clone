import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider as RestyleProvider } from '@shopify/restyle';
import { useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import StatusBar from './src/components/StatusBar';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import LoadingScreen from './src/screens/Loading';
import theme from './src/stylesheets/theme';

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const loadAssets = () => {
      // Remover depois
      setTimeout(() => {
        setIsReady(true);
      }, 3000);
    }

    loadAssets();
  }, []);

  return (
    <>
      <StatusBar />
      
      <RestyleProvider theme={theme}>
        <StyledComponentsProvider theme={theme}>
          <NavigationContainer>
            {isReady ? <MainStackNavigator /> : <LoadingScreen />}
          </NavigationContainer>
        </StyledComponentsProvider>
      </RestyleProvider>
    </>
  );
}

export default App;
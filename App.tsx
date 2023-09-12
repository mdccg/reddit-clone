import { ThemeProvider as RestyleProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import LoadingScreen from './src/screens/Loading';
import theme from './src/stylesheets/theme';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      
      <RestyleProvider theme={theme}>
        <StyledComponentsProvider theme={theme}>
          <LoadingScreen />
        </StyledComponentsProvider>
      </RestyleProvider>
    </>
  );
}

export default App;
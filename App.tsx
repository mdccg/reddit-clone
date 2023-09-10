import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import LoadingScreen from './src/screens/Loading';
import Theme from './src/stylesheets/theme';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      
      <ThemeProvider theme={Theme}>
        <LoadingScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
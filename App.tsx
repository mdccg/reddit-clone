import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { useEffect, useState } from 'react';
import StatusBar from './src/components/StatusBar';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import LoadingScreen from './src/screens/Loading';
import theme from './src/stylesheets/theme';
import { UserContextProvider } from './src/context/UserContext';
import AppWrapper from './AppWrapper';

const App = () => {
  return (
    <UserContextProvider>
      <AppWrapper />
    </UserContextProvider>
  );
}

export default App;
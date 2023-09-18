import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/add-all-tz';
import '@formatjs/intl-datetimeformat/locale-data/pt';
import { Settings } from 'luxon';
import AppWrapper from './AppWrapper';
import { UserContextProvider } from './src/context/UserContext';
Settings.defaultLocale = 'pt';

const App = () => {
  return (
    <UserContextProvider>
      <AppWrapper />
    </UserContextProvider>
  );
}

export default App;
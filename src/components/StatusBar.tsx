import Constants from 'expo-constants';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const StatusBar = () => (
  <>
    <View style={{ height: Constants.statusBarHeight }} />
    <ExpoStatusBar style="auto" />
  </>
);

export default StatusBar;
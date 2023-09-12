import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../../screens/Feed';

const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  header: () => <></>,
};

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Feed" screenOptions={screenOptions}>
    <Stack.Screen name="Feed" component={FeedScreen} />
  </Stack.Navigator>
);

export default MainStackNavigator;
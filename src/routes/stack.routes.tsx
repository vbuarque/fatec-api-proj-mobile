import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Details from '../screens/Details';

import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, }}></Stack.Screen>
      <Stack.Screen name="Home" component={TabRoutes} options={{ headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Favorites" component={TabRoutes} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="Details" component={Details} ></Stack.Screen>
    </Stack.Navigator>
  )
}
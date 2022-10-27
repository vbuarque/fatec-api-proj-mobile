import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={Home}></BottomTab.Screen>
          <BottomTab.Screen name="Favorites" component={Favorites}></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}
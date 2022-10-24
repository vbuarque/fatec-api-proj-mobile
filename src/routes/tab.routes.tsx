import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Navigator 
        screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                color: '#f8f8ff'
            },
            headerStyle: {
                backgroundColor: '#AAC4FF',
            },
            tabBarActiveTintColor: '#29292e',
            tabBarInactiveTintColor: '#f8f8ff',
            tabBarStyle: {
                backgroundColor: '#AAC4FF',
            },
        }}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: 'Lista de estações',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                        icon={faHome} 
                        color={color}
                        size={size}
                        />
                    )
                }}
            />

            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerTitle: 'Favoritos',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon
                        icon={faStar} 
                        color={color}
                        size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Welcome from '../screens/Welcome';

const { Screen, Navigator, Group } = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />

            <Group
                screenOptions={{
                    headerTitleAlign: 'center',
                }}>
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Lista de estações',
                    }}
                />

                <Screen
                    name="Favorites"
                    component={Favorites}
                    options={{
                        title: 'Favoritos',
                    }}
                />
            </Group>
        </Navigator>
    )
}
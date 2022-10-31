
import {StatusBar} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { House, Star } from 'phosphor-react-native'; 

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

import { RootTabParamList } from './types';

const { Screen, Navigator } = createBottomTabNavigator<RootTabParamList>();

export default function TabRoutes() {
    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={"transparent"} translucent /> 
            <Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarShowLabel: false,
                headerTintColor: '#29292e',
                headerTitleStyle: {fontWeight: 'normal'},
                tabBarActiveTintColor: '#00C667',
                tabBarInactiveTintColor: '#c1c1c1',
                headerStyle: {
                    backgroundColor: '#f8f8ff', 
                    borderBottomWidth: 1,
                    height: 60,
                },

                tabBarStyle: {
                    backgroundColor: '#f8f8ff',
                    borderTopWidth: 1,
                    height: 60,
                    padding: 10,
                }
            }}
            >
            
                <Screen name="HomeTab" component={Home} options={{ 
                    title: 'Página Inicial',
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <House size={size} color={color} weight="fill"/>
                        );
                    },
                
                }}
                />
                <Screen name="FavoritesTab" component={Favorites} options={{ 
                    title: 'Favoritos', 
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <Star size={size} color={color} weight="fill"/>
                        );
                    },
                }}
                />
            </Navigator>
        </>
    )
}
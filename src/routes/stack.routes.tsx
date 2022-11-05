import {StatusBar} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Details from '../screens/Details';

import { RootStackParamList } from './types';
import TabRoutes from './tab.routes';

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <>
       <StatusBar barStyle={'light-content'} backgroundColor={"transparent"} translucent /> 
       <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Screen name="Welcome" component={Welcome} options={{ headerShown: false, }} />
      <Screen name="Home" component={TabRoutes} options={{ headerShown: false }} />
      <Screen name="Details" component={Details} options={{
        title: 'Detalhes da estação',
        headerStyle: {
          backgroundColor: '#f8f8ff',
        },
        headerTintColor: '#29292e',
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }} 
      />
    </Navigator>
    </>
    
  )
}
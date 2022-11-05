import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
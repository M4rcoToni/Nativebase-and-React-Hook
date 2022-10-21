import {SiginUp} from './src/screens/SiginUp/SiginUp';
import { NativeBaseProvider } from 'native-base';
export default function App() {
  return (
    <NativeBaseProvider>
      <SiginUp/>
    </NativeBaseProvider>
  );
}


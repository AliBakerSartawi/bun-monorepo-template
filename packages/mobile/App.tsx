import { TamaguiProvider } from 'tamagui';
import Home from './src/components/Home';
import { tamaguiConfig as tamaguiConfig } from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Home />
    </TamaguiProvider>
  );
}
